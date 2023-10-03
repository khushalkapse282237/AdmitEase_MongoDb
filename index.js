const express = require('express');
const app = express();
const port = process.env.port || 3000;

// MongoDB setup
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Model and databases
const mong = require("mongoose");
mong.connect("mongodb://127.0.0.1:27017/AdmitEase_MongoDb",{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("database connected successfully done bro");
}).catch((e)=>{
    console.log("not bro");
})

app.use(express.static('public'));
app.use(express.static('external'));

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

//table 1 = signUp
const signUp=new mong.Schema({
    name:{
        type:String,
        required:true
    },
    mob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:false
    },
    student:{
        type:String,
        required:false
    },
});
const Register_signUp = new mong.model("signUp",signUp)
module.exports  = Register_signUp;

// Handle form submission
app.post('/addData', async (req, res) => {
    try{
        const inserting = new Register_signUp({
            name:req.body.name,
            mob:req.body.mob,
            email:req.body.email,
            password:req.body.password,
            college:req.body.college,
            student:req.body.student,
        })
        const register1 = await inserting.save();
        res.status(201).render(index);
    }catch(error){
        res.status(400).send(error);
    }
});

//table 2 = admission_form
const admission_form=new mong.Schema({
    College_name:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Full_name:{
        type:String,
        required:true
    },
    Fathers_name:{
        type:String,
        required:true
    },
    Mothers_name:{
        type:String,
        required:true
    },
    Date_of_birth:{
        type:Date,
        required:true
    },
    Candidate_type:{
        type:String,
        required:true
    },
    Home_university:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Category_for_admission:{
        type:String,
        required:true
    },
    Applied_for_EWS:{
        type:String,
        required:true
    },
    Person_with_disability:{
        type:String,
        required:true
    },
    Applied_tfws_seat:{
        type:String,
        required:true
    },
    Defence_type:{
        type:String,
        required:true
    },
    Is_orphan_candidate:{
        type:String,
        required:true
    },
    Minority_candidate_type:{
        type:String,
        required:false
    },
    Gender:{
        type:String,
        required:false
    },
});
const Register_admission_form = new mong.model("admission_form",admission_form)
module.exports  = Register_admission_form;

// Handle form submission
app.post('/registration_data', async (req, res) => {
    try{
        const inserting = new Register_admission_form({
            College_name:req.body.College_name,
            Branch:req.body.Branch,
            Full_name:req.body.Full_name,
            Fathers_name:req.body.Fathers_name,
            Mothers_name:req.body.Mothers_name,
            Date_of_birth:req.body.Date_of_birth,
            Candidate_type:req.body.Candidate_type,
            Home_university:req.body.Home_university,
            Category:req.body.Category,
            Category_for_admission:req.body.Category_for_admission,
            Applied_for_EWS:req.body.Applied_for_EWS,
            Person_with_disability:req.body.Person_with_disability,
            Applied_tfws_seat:req.body.Applied_tfws_seat,
            Defence_type:req.body.Defence_type,
            Is_orphan_candidate:req.body.Is_orphan_candidate,
            Minority_candidate_type:req.body.Minority_candidate_type,
            Gender:req.body.Gender,
        })
        const register2 = await inserting.save();

        res.status(201).render(index);
    }catch(error){
        res.status(400).send(error);
    }
});