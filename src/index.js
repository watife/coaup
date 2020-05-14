import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
const morgan = require('morgan')
require('dotenv').config()

/**
 * app routes
 */
import companyRoutes from './core/company/express-routes';
import staffRoutes from './core/staff/express-routes';
import projectRoutes from './core/project/express-routes';

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}` )
})

app.use("/api/v1/company/", companyRoutes);
app.use("/api/v1/staff/", staffRoutes);
app.use("/api/v1/project/", projectRoutes);
