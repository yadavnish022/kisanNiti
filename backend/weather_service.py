import requests

API_KEY = "f817e8a4d3a6f25293e57122c3b14936"

def get_weather_by_city(city):
    url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?q={city},IN&appid={API_KEY}&units=metric"
    )

    res = requests.get(url).json()

    if "main" not in res:
        return {"error": "Weather data not available"}

    temp = res["main"]["temp"]
    humidity = res["main"]["humidity"]
    rain = res.get("rain", {}).get("1h", 0)
    wind = res["wind"]["speed"]

    # logic for taking decision
    if rain > 10:
        risk = " Heavy rainfall – delay selling the crop."
    elif temp > 38:
        risk = " Extreme heat – selling immediately would be better."
    else:
        risk = " Weather is favorable – safe to sell."

    return {
        "temperature": temp,
        "humidity": humidity,
        "rain_mm": rain,
        "wind_speed": wind,
        "risk": risk
    }
