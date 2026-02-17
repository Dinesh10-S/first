const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    console.log("Name:", req.body.name);
    console.log("Age:", req.body.age);
    res.send("Registration Successful!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});