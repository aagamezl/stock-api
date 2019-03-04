import test from 'ava'

import router from './../src/server/Router'

test.beforeEach(t => {
  router.setRoutes({})
})

test.serial('should add delete route', t => {
  const method = 'DELETE'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.delete('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})

test.serial('should add get route', t => {
  const method = 'GET'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.get('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})

test.serial('should add head route', t => {
  const method = 'HEAD'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.head('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})

test.serial('should add options route', t => {
  const method = 'OPTIONS'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.options('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})

test.serial('should add patch route', t => {
  const method = 'PATCH'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.patch('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})

test.serial('should add post route', t => {
  const method = 'POST'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.post('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})

test.serial('should add put route', t => {
  const method = 'PUT'
  const handler = (request, response) => {}
  const routes = {
    [method]: [{
      handler,
      params: [],
      path: /^\/route$/,
      method
    }]
  }

  router.put('/route', handler)

  t.deepEqual(router.getRoutes(), routes)
})
