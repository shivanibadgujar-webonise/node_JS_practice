const express = require("express");

const app= express();
const PORT = 3000;

app.use(express.json());  

const logger = (req, res, next) => {
    const dateObj = new Date();
    console.log(dateObj.getTime());
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello world !!!');
});

app.get("/user/:userId", (req, res) => {
    console.log(req.params);
    res.send('Hello world !!!');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello world !!!');
});

app.put('/', (req, res) => {
    res.send('Hello world !!!');
});

app.delete('/', (req, res) => {
    res.send('Hello world !!!');
});

app.listen(PORT, ()=> {
    console.log(`Application is started at ${PORT} !!`);
});  