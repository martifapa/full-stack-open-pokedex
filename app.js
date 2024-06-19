const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080
console.log('## ## ## PORT ->', PORT) // eslint-disable-line no-console

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})