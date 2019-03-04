import http from 'http'
import url from 'url'

import config from './../config'
import { log, formatDate } from './../helpers'
import router from './Router'

const DEFAULT_CONFIG = {
  'host': '::',
  'port': 8008
}

const listen = (port = DEFAULT_CONFIG.port, host = DEFAULT_CONFIG.host) => {
  const server = http.createServer(requestHandler)

  server.listen(port, host, (error) => {
    if (error) {
      console.log(`Something bad happened ${error}`)

      throw new Error(`Something bad happened ${error}`)
    }

    console.log(`Server is listening on host ${host} and port ${port}`)
  })
}

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true)
  const route = router.verifyRoute(parsedUrl.pathname, request.method)

  if (route === undefined) {
    write(response, '', 404)

    log(config.log, {
      url: request.url,
      time: formatDate(new Date()),
      status: 404
    })

    return
  }

  request.params = route.params || {}
  request.query = parsedUrl.query || {}

  log(config.log, {
    url: request.url,
    time: formatDate(new Date()),
    status: response.statusCode
  })

  switch (request.method) {
    case 'DELETE':
      break

    case 'GET':
      route.handler(request, response)

      break

    case 'PATH':
      break

    case 'POST':
      let body = []

      request.on('data', (chunk) => {
        body.push(chunk)
      })

      request.on('end', () => {
        body = Buffer.concat(body).toString()

        if (request.headers['content-type'] === 'application/json') {
          body = JSON.parse(body)
        }

        request.body = body

        route.handler(request, response)
      })

      break

    case 'PUT':
      break
  }
}

const usage = () => {
  return [
    'Usage: server [options]',
    '',
    'Options:',
    `  -p --port    Port to use [${DEFAULT_CONFIG.port}]`,
    `  -H --host    Address to use [${DEFAULT_CONFIG.host}]`,
    '  -h --help    Print this list and exit.'
  ].join('\n')
}

const write = (response, data, statusCode = 200) => {
  response.setHeader('Content-Type', 'application/json')
  response.writeHead(statusCode)
  response.write(data)
  response.end()
}

export default {
  listen,
  ...router,
  usage,
  write
}
