const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Remove deprecated options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

// Connect to the database without deprecated options
db.mongoose.connect(db.url)
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(err => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to mevnindokratomfarm-server'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});