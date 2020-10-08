import express, { Request, Response } from 'express'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    isSucces: true,
    message: 'Hello, World!',
  })
})

app.use(errorHandler)

export default app
