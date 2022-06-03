var express = require('express');
var auth    = require('./auth');
const verifikasi = require('./verifkasi');
var router  = express.Router();

// daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

// alamat yang perlu authorisasi
router.get("/api/v1/rahasia",verifikasi(),auth.halamanrahasia);

module.exports = router;