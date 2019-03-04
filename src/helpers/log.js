import fs from 'fs'
import os from 'os'

/**
 * Log the given data to the given file
 *
 * @param {string} file
 * @param {object} data
 */
export const log = (file, data) => {
  fs.appendFile(file, JSON.stringify(data) + os.EOL, (err) => {
    if (err) throw err

    console.log('The log has been saved!')
  })
}
