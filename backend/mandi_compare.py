def top_mandis(data):
    return sorted(data, key=lambda x: x["price"], reverse=True)[:5]
