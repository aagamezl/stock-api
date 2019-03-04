const getBoolean = (value) => {
  if (['true', 'yes', '1'].includes(value)) {
    return true
  } else if (['false', 'no', '0'].includes(value)) {
    return false
  }
}

export const getParams = (params) => {
  let previous

  const options = params.slice(2).reduce((accumulator, current) => {
    if (current.startsWith('-') || current.startsWith('--')) {
      const isShourtcut = !current.startsWith('--')

      previous = current
      accumulator[current.slice(isShourtcut ? 1 : 2)] = true
    } else {
      const isShourtcut = !previous.startsWith('--')

      accumulator[previous.slice(isShourtcut ? 1 : 2)] = isBoolean(current) ? getBoolean(current) : current
    }

    return accumulator
  }, {})

  return options
}

const isBoolean = (value) => {
  if (['true', 'yes', '1', 'false', 'no', '0'].includes(value)) {
    return true
  }

  return false
}
