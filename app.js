const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/login_process', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log('Username/Email:', username);
    console.log('Password:', password);

    res.send('Form submitted successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
