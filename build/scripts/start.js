const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(8081, () => {
  logger.success('Server is running at http://localhost:8081')
})
