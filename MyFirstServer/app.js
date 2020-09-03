const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/style', (req, res) => {
  res.sendFile(clientDir + "index.css")
})

app.get('/cssen', (req, res) => { //Detta är hur man får css att fungera man måste skicka en get request + namn och sen göra sendFile(clientDir och sen + css filen)
  res.sendFile(clientDir + "index.css")
})
app.get('/nightmare', (req, res) => { //Detta är hur man får en bild att fungera det är samma princip som css.
  res.sendFile(clientDir + "nightmareKingGrimm.png")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


