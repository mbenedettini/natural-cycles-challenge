import errorHandler from 'errorhandler'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

import app from './app'
import { User } from './entity/User'
import log from './logger'

const DEFAULT_PORT = 3000

createConnection().then(async connection => {
  /**
   * Error Handler. Provides full stack - remove for production
   */
  app.use(errorHandler())
  const port = app.get('port') || DEFAULT_PORT

  const server = app.listen(port, () => {
    log.info(
      'App is running at http://localhost:%d in %s mode',
      port,
      app.get('env'),
    )
    log.info('  Press CTRL-C to stop\n')
  })
})
