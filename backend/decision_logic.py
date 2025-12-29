def decision_engine(today_price, forecast_prices):
    best_future = max(forecast_prices)
    growth = ((best_future - today_price) / today_price) * 100

    if growth > 10:
        return "HOLD", f"Prices for the next 7 days. {round(growth,1)}% Estimated increase"
    elif growth > 3:
        return "WAIT", "It would be better to wait for some time."
    else:
        return "SELL", "Today’s price is good, but there is a risk of a drop."
