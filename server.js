const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Koneksi ke MongoDB (ganti 'your-mongodb-uri' dengan URI MongoDB Anda)
mongoose.connect('mongodb://localhost:27017/mevnindokratomdb', {
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB:', err));

// Rute sederhana
app.get('/', (req, res) => {
  res.send('Hello from MEVN backend!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
