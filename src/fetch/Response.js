export default class Response {
  /**
   * Create a new Response object
   *
   * @param {string} body
   * @param {string} url
   * @param {object} response
   */
  constructor (body, url, response) {
    this.body = body

    this.statusCode = response.statusCode
    this.headers = response.headers
    this.url = url
  }

  json () {
    return JSON.parse(this.body)
  }

  text () {
    return this.body
  }
}
