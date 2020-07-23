const express = require("express")
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.urlencoded({ extended: true }));

app.all("*", async function (req, res) {
  console.info("Receiving new request...")
  console.info({
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
    ip: req.ip
  })

  res.sendStatus(200).end()
})

app.listen(
  process.env.PORT || 3030,
  () => console.info("Server is running...")
);