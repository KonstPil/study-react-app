const express = require("express");
const connectDb = require('./config/db');
const path = require('path');

const app = express();

//connectdb
connectDb();

//init middleware
app.use(express.json({extended: false}));

if(process.env.NOVE_ENV === 'production'){
   app.use(express.static('client/build'));

   app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,
       çlient, 'index.html')))
}

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started'));