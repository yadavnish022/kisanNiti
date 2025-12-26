from weather_service import get_weather_by_city
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# local files
from agmark_service import fetch_mandi_prices
from mandi_compare import top_mandis
from bigquery_service import get_price_forecast
from decision_logic import decision_engine

# api connnect
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CropRequest(BaseModel):
    crop: str

@app.get("/")
def root():
    return {"status": "Backend running fine"}


@app.post("/predict")
def predict(req: CropRequest):
    # fetch market price from AGMARK
    mandi_data = fetch_mandi_prices(req.crop)

    if not mandi_data:
        return {
            "decision": "NO DATA",
            "reason": "Market data is not available for this crop.",
            "best_mandis": [],
            "forecast": []
        }

    # best marketts 
    best_mandis = top_mandis(mandi_data)

    # check purpose 
    if not best_mandis:
        return {
            "decision": "NO DATA",
            "reason": "No data found for market comparison.",
            "best_mandis": [],
            "forecast": []
        }

    today_price = best_mandis[0]["price"]

    # biqquery ml 
    forecast = get_price_forecast(req.crop)

    if not forecast:
        return {
            "decision": "NO FORECAST",
            "reason": "Forecast data not available",
            "best_mandis": best_mandis,
            "forecast": []
        }

    # logic for taking decision
    decision, reason = decision_engine(
        today_price,
        [f["price"] for f in forecast]
    )

    # response after input
    return {
        "decision": decision,
        "reason": reason,
        "best_mandis": best_mandis,
        "forecast": forecast
    }

@app.get("/weather/{city}")
def weather(city: str):
    return get_weather_by_city(city)
