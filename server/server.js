const express = require('express'); 
const apiRouter = require('./routes')
//npm run dev -> to run nodemon

const app = express(); 

app.use(express.json()); 

app.use('/api/users', apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`server is running on port: ${process.env.PORT || '3000'}`);
})
