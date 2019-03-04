import https from 'https'

import Response from './'

/**
 *
 * @param {string} url
 * @param {object} [options]
 * @returns {Promise}
 */
export const fetch = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = ''

      // A chunk of data has been recieved.
      response.on('data', (chunk) => {
        data += chunk
      })

      // The whole response has been received.
      response.on('end', () => {
        resolve(new Response(data, url, response))
      })
    }).on('error', (error) => {
      reject(error.message)
    })
  })
}
