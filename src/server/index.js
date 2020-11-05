import config from 'config'
import helica from 'helica'

import * as reactApp from './controllers/app.js'

const app = new helica.Server({
  debug: !config.has('NODE_ENV') || config.get('NODE_ENV') !== 'production',
  sslApp: false,
})

// catch all GET to host React app
reactApp.loadRoute(app, '**')

app.run('0.0.0.0', config.has('PORT') ? config.get('PORT') : 3030)
