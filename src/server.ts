import app from './app'

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(
    ` -> Microservice Account API started at http://localhost:${port}/`
  )
})
