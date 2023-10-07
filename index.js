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

const db = mong.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
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

// const userdetails = Register_admission_form.find({});

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

        // userdetails.exec(function (error,data) {
        //     if(error){
        //         console.log("error");
        //     }
        // })
        res.status(201).render(index);
    }catch(error){
        res.status(400).send(error);
    }


});



app.get('/registration_data', async (req, res) => {
    try {
        // Retrieve data from MongoDB using your model
        const records = await Register_admission_form.find(); // Change this to your actual model

        // Generate an HTML table dynamically
        let tableHTML = '<table>';
        tableHTML += '<thead><tr><th>College_name</th><th>Branch</th><th>Full_name</th><th>Fathers_name</th><th>Mothers_name</th><th>Date_of_birth</th><th>Candidate_type</th><th>Home_university</th><th>Category</th><th>Category_for_admission</th><th>Applied_for_EWS</th><th>Person_with_disability</th><th>Applied_tfws_seat</th><th>Defence_type</th><th>Is_orphan_candidate</th><th>Minority_candidate_type</th><th>Gender</th></thead>';
        tableHTML += '<tbody>';

        // Loop through the records and add rows to the table
        records.forEach((record) => {
            tableHTML += `<tr><td>${record.College_name}</td> <td>${record.Branch}</td> <td>${record.Full_name}</td> <td>${record.Fathers_name}</td> <td>${record.Mothers_name}</td> <td>${record.Date_of_birth}</td> <td>${record.Candidate_type}</td> <td>${record.Home_university}</td> <td>${record.Category}</td> <td>${record.Category_for_admission}</td> <td>${record.Applied_for_EWS}</td> <td>${record.Person_with_disability}</td> <td>${record.Applied_tfws_seat}</td> <td>${record.Defence_type}</td> <td>${record.Is_orphan_candidate}</td> <td>${record.Minority_candidate_type}</td> <td>${record.Gender}</td></tr>`;
            // Add more columns as needed
        });

        tableHTML += '</tbody></table>';

        // Send the HTML table as the response
        res.send(tableHTML);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server(Website) is running');
  });