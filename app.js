const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080

app.get('/version', (_request, response) => {
  response.send('1') // change this string to ensure a new version is deployed
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})