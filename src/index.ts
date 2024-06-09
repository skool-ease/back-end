import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import appConstants from './appConstants'
import AuthRoutes from './routes/auth.routes'
import middlewares from './middlewares'

const app: Application = express()

app.use(
  express.json({
    limit: '1gb'
  })
)
app.use(cors())

app.use(middlewares)

app.use('/auth', AuthRoutes)

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Hello TypeScript!')
})

const port = appConstants.PORT
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
