const express = require('express');
const app = express();
const port = 3000;

// MongoDB setup
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Model and databases
const mong = require("mongoose");
mong.connect("mongodb://127.0.0.1:27017/k1",{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("database connected successfully done bro");
}).catch((e)=>{
    console.log("not bro");
})
const schema=new mong.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
});
const Register = new mong.model("Register",schema)
module.exports  = Register;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Set up EJS templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  // Render your HTML file with EJS
  res.render('index');
});


// Start the server
app.listen(port, () => {
  console.log('Server(Website) is running');
});

// Handle form submission
app.post('/addData', async (req, res) => {
    try{
        const inserting = new Register({
            email:req.body.email,
            name:req.body.name
        })
        const register = await inserting.save();
        res.status(201).render(index);
    }catch(error){
        res.status(400).send(error);
    }
});
