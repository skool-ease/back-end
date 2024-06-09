import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import appConstants from './appConstants'
import AuthRoutes from './routes/auth.routes'

const app: Application = express()

app.use(
  express.json({
    limit: '50mb'
  })
)
app.use(cors())

// @ts-expect-error TODO
app.use(middlewares)

app.use('/auth', AuthRoutes)

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Hello TypeScript!')
})

const port = appConstants.PORT
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
