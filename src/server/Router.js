import { matchAll } from './../helpers/utils'

let routes = {}

const addRoute = (method, path, handler) => {
  const route = {
    handler,
    params: matchAll(/:(\w*)/g, path).map(param => param[1]),
    // path: new RegExp(`^${path.replace(/\//g, '\\/').replace(/:(\w*)/g, '(\\w*)')}$`),
    path: new RegExp(`^${path.replace(/\//g, '\\/').replace(/:(.*)/g, '(.*)')}$`),
    method
  }

  // console.log(route)

  if (Array.isArray(routes[method]) === false) {
    routes[method] = []
  }

  routes[method].push(route)
}

const getRoutes = () => {
  return routes
}

const routerMethods = {
  delete: (path, handler) => {
    addRoute('DELETE', path, handler)
  },
  get: (path, handler) => {
    addRoute('GET', path, handler)
  },
  head: (path, handler) => {
    addRoute('HEAD', path, handler)
  },
  options: (path, handler) => {
    addRoute('OPTIONS', path, handler)
  },
  patch: (path, handler) => {
    addRoute('PATCH', path, handler)
  },
  post: (path, handler) => {
    addRoute('POST', path, handler)
  },
  put: (path, handler) => {
    addRoute('PUT', path, handler)
  }
}

const setRoutes = (newRoutes) => {
  routes = newRoutes
}

const verifyRoute = (path, method) => {
  for (const route of routes[method]) {
    let match = path.match(route.path)

    if (match !== null) {
      match = match.slice(1)

      return {
        ...route,
        params: match.reduce((params, value, index) => {
          params[route.params[index]] = value

          return params
        }, {})
      }
    }
  }

  return undefined
}

export default {
  // addRoute,
  getRoutes,
  ...routerMethods,
  setRoutes,
  verifyRoute
}
