import test from 'ava'

import { getParams } from './../src/helpers/cli'

test('should parse default true', t => {
  const params = [
    '/home/aagamezl/.nvm/versions/node/v10.13.0/bin/node',
    '/home/aagamezl/.nvm/versions/node/v10.13.0/bin/kiirusdb',
    '--enableEncryption',
    '--kmipServerName',
    'KMIP Server HostName',
    '--kmipPort',
    '3000',
    '--kmipServerCAFile',
    'ca.pem',
    '--kmipClientCertificateFile',
    'client.pem'
  ]

  const result = {
    enableEncryption: true,
    kmipServerName: 'KMIP Server HostName',
    kmipPort: '3000',
    kmipServerCAFile: 'ca.pem',
    kmipClientCertificateFile: 'client.pem'
  }

  t.deepEqual(getParams(params), result)
})

test('should parse false value', t => {
  const params = [
    '/home/aagamezl/.nvm/versions/node/v10.13.0/bin/node',
    '/home/aagamezl/.nvm/versions/node/v10.13.0/bin/kiirusdb',
    '--enableEncryption',
    'false',
    '--kmipServerName',
    'KMIP Server HostName',
    '--kmipPort',
    '3000',
    '--kmipServerCAFile',
    'ca.pem',
    '--kmipClientCertificateFile',
    'client.pem'
  ]

  const result = {
    enableEncryption: false,
    kmipServerName: 'KMIP Server HostName',
    kmipPort: '3000',
    kmipServerCAFile: 'ca.pem',
    kmipClientCertificateFile: 'client.pem'
  }

  t.deepEqual(getParams(params), result)
})

test('should parse shortcut params', t => {
  const params = [
    '/home/aagamezl/.nvm/versions/node/v10.13.0/bin/node',
    '/home/aagamezl/.nvm/versions/node/v10.13.0/bin/kiirusdb',
    '-p',
    '3000',
    '-S',
    '--cert',
    'path/to/cert.pem',
    '-K',
    'path/to/key.pem',
  ]

  const result = {
    p: '3000',
    S: true,
    cert: 'path/to/cert.pem',
    K: 'path/to/key.pem',
  }

  t.deepEqual(getParams(params), result);
})
