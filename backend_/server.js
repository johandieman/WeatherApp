let app = require('express')();
let cors = require('cors');
const helmet = require('helmet');
let port = process.env.PORT || 3000;
require('dotenv').config();
let handler = require('./DataHandler');

app.use(helmet());
app.use(cors());

app.get('/login', (req, res) => {
    if(handler.searchuser(req.query.username)==req.query.password){
        res.send(true);
    }
    else{
        res.send(false);
    }
});

app.get('/register', (req, res) => { 
    if (handler.searchuser({username:req.query.username})!=null) {
        res.send(true);
    }
    else{
        res.send(false);
    }
});



app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});