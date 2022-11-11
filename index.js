const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static('assets'));

var contactList = [

    {
        name: "Prashant",
        phone:" 8130047764"

    },
    {
        name: "Coding Ninjas",
        phone: "8130047764"
    }
]

app.get('/', function  (req,res){
    
    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
});

app.get('/practice', function  (req,res){
    
    return res.render('practice',{
        title: "Lets play"
    });
});

app.post('/create-contact', function(req,res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // })

    contactList.push(req.body);

    return res.redirect('back');
});


app.listen(port,function(err){
    if(err) { console.log('Error in running the server', err);}

    console.log('Yup server is running on port ',port);
});