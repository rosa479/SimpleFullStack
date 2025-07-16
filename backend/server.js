const express = require('express')
const app = express()
const port = 3000

app.get('/api/name', (req, res) => {
  res.json({ name: 'Rohan Kumar Sah' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err)
  res.status(500).json({ error: 'Something went wrong' })
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})
