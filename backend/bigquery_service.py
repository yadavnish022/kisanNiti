from google.cloud import bigquery

client = bigquery.Client()

PROJECT = "farmer-price-predictor"
DATASET = "farmer_data"
MODEL = "price_model"


def get_price_forecast(crop):

    query = f"""
    SELECT
      forecast_timestamp,
      forecast_value,
      series_id
    FROM ML.FORECAST(
      MODEL `{PROJECT}.{DATASET}.{MODEL}`,
      STRUCT(7 AS horizon)
    )
    WHERE series_id LIKE '{crop}_%'
    ORDER BY forecast_timestamp
    """

    job = client.query(query)
    rows = job.result()

    return [
        {
            "date": str(row.forecast_timestamp.date()),
            "price": round(row.forecast_value, 2)
        }
        for row in rows
    ]
def fallback_forecast_from_history(mandi_data):
    prices = [m["price"] for m in mandi_data[:7]]
    return [
        {"date": f"Day {i+1}", "price": round(p, 2)}
        for i, p in enumerate(prices)
    ]
