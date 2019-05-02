require("colors")

const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

const listener = app.listen(4000, () => {
  console.log(`> [WEB]`.gray + ` Started on port ` + `${listener.address().port}`.green)
})