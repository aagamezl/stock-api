import path from 'path'

export default {
  "log": path.join(__dirname, 'log.txt'),
  "stock": {
    "url": {
      "logo": "https://api.iextrading.com/1.0/stock/{ticker}/logo",
      "news": "https://api.iextrading.com/1.0/stock/{ticker}/news/last/10",
      "quote": "https://api.iextrading.com/1.0/stock/{ticker}/quote",
      "collection": "https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName={collection}"
    }
  }
}
