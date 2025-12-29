def weather_alert(w):
    if w["rainfall"] > 50:
        return "Risk of heavy rainfall."
    if w["temp"] > 40:
        return "Heat alert."
