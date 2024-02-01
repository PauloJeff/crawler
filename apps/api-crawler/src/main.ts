import express from 'express'
import 'reflect-metadata'
import * as bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import 'dotenv/config'
import routes from './routes'
import errorHandler  from './middlewares/errors'
import 'express-async-errors'

const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 3000

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.use('/api', routes)

app.use(errorHandler)

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`)
})

export default app;