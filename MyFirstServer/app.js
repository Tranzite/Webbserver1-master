const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myServer', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    name: String,
    email: String
  
  });

const Person = mongoose.model('Student', personSchema);


const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.html")

})
app.get('/cssen', (req, res) => { //Detta är hur man får css att fungera man måste skicka en get request + namn och sen göra sendFile(clientDir och sen + css filen)
  res.sendFile(clientDir + "index.css")
})
app.get('/nightmare', (req, res) => { //Detta är hur man får en bild att fungera det är samma princip som css.
  res.sendFile(clientDir + "nightmareKingGrimm.png")
})

app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)
  res.redirect('/')
  //save name and email under here

  const Person = mongoose.model('Info', personSchema);

  const user = new Person({name: 'David', email: 'h@hgmail.com'})
  
  user.save()
  

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
