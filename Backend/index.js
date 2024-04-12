const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const userRouter = require('./Routers/User');

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/User', userRouter);            

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });