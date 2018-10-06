console.log('Hello world')
import errorHandler from 'errorhandler'
import app from './app'

const DEFAULT_PORT = 3000

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler())

/**
 * Start Express server.
 */
const port = app.get('port') || DEFAULT_PORT
const server = app.listen(port, () => {
  console.log(
    'App is running at http://localhost:%d in %s mode',
    port,
    app.get('env'),
  )
  console.log('  Press CTRL-C to stop\n')
})

export default server
