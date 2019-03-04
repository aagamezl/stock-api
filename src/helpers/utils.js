/**
 * Perform a global regular expression match. Searches subject for all
 * matches to the regular expression given in pattern and return them.
 *
 * @param {object} regex
 * @param {*} value
 * @returns {array}
 *
 * @memberOf Helper
 */
export const matchAll = (regex, value) => {
  let match
  const matches = []

  while ((match = regex.exec(value)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
      regex.lastIndex++
    }

    // The result can be accessed through the `m`-variable.
    matches.push(match)
  }

  return matches
}

/**
 * Format a date according to the given format o using a default format
 *
 * @param {Date} time
 * @param {object} format
 * @returns {string}
 */
export const formatDate = (time, format) => {
  return new Intl.DateTimeFormat('default', format || {
    hour12: false,
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(time).replace(',', '')
}
