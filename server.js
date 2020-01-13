const express = require("express");

const app = express();

app.get('/', (req, res)=>{
   return res.json({msg: 'Hello World'});
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('server started'));