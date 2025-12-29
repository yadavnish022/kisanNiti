import requests

AGMARK_API_KEY = "579b464db66ec23bdd0000018114ba23822746515f1fc4e083fd823f"

def fetch_mandi_prices(crop):
    url = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"
    params = {
        "api-key": AGMARK_API_KEY,
        "format": "json",
        "filters[commodity]": crop,
        "limit": 100
    }

    r = requests.get(url, params=params).json()

    records = []
    for row in r.get("records", []):
        records.append({
            "state": row["state"],
            "mandi": row["market"],
            "price": float(row["modal_price"]),
            "date": row["arrival_date"]
        })

    return records
