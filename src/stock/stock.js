import config from './../config'
import { fetch } from './../fetch'
import server from './../server'

export const getCollection = async (request, response) => {
  try {
    const collection = await fetch(getUrl(
      'collection',
      'collection',
      request.params.collection
    ))

    server.write(response, JSON.stringify(collection.json()))
  } catch (error) {
    server.write(response, error.message, 500)
  }
}

export const getStock = async (request, response) => {
  const stock = {}

  try {
    const quote = await fetch(getUrl('quote', 'ticker', request.params.ticker))

    stock.latestPrice = quote.json().latestPrice
  } catch (error) {
    server.write(response, error.message, 500)
  }

  try {
    const logo = await fetch(getUrl('logo', 'ticker', request.params.ticker))

    stock.logo = logo.json().url
  } catch (error) {
    server.write(response, error.message, 500)
  }

  try {
    const news = await fetch(getUrl('news', 'ticker', request.params.ticker))

    stock.news = news.json()
  } catch (error) {
    server.write(response, error.message, 500)
  }

  server.write(response, JSON.stringify(stock))
}

const getUrl = (type, token, value) => {
  return config.stock.url[type].replace(`{${token}}`, value)
}
