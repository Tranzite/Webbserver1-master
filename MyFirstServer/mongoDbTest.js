const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshop', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  
  });


  personSchema.methods.speak = () => {
    console.log("Hej");
    console.log(`My name is ${this.name},`)


    const presentation = this.name
    ? `My name is ${this.name},`
    : `We are watching you!`;

    console.log(presentation);
  }


  const Person = mongoose.model('Student', personSchema);

  const niklas = new Person({name: 'Niklas', age: 33})
  const david = new Person({name: 'David', age: 18})
  const hugo = new Person({name: 'Hugo', age: 17})
  const rasmus = new Person({name: 'Rasmus', age: 18})


  niklas.save()
  david.save()
  hugo.save()
  rasmus.save()

   
  
/*
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

  Kitten.find({ name: /^fluff/ }, callback); */
