import { getParams } from './helpers/cli'
import * as stock from './stock'
import server from './server'

const params = getParams(process.argv || {})

if (params.help || params.h) {
  console.log(server.usage())

  process.exit();
}

server.get('/stock/collection/:collection', stock.getCollection)

server.get('/stock/:ticker', stock.getStock)

server.listen(params.port || params.p, params.host || params.H)

