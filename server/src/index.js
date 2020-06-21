import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
const morgan = require('morgan')


/**
 * app routes
 */
import companyRoutes from './core/company/express-routes'
import eventRoutes from './core/events/express-routes'

const app = express()
const PORT = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`)
})

app.use('/api/v1/company/', companyRoutes)
app.use('/api/v1/event/', eventRoutes)
