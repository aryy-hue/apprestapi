'use strict';

var response    = require( './res');
var connection  = require('./koneksi');

exports.index = function (req, res){
    response.ok("Aplikasi : Rest API berjalan", res)
};

// menampilkan data dari DB
exports.tampilsemuamahasiswa = function(req,res){
        connection.query('SELECT * FROM mahasiswa' , function(errors, rows , fields){
            if(errors){
                console.log(errors);
            }
            else{
                response.ok(rows, res)
            }
        });
};  
// menampilkan mahasiswa berdasarkan ID 
exports.tampilkanmahasiswaid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?',[id],
        function(errors, rows , fields){
            if(errors){
                console.log(errors);
            }
            else{
                response.ok(rows, res)
            }
        });
};

// menambahkan data mahasiswa
exports.tambahMahasiswa = function(req,res){
    var nim     = req.body.nim;
    var nama    = req.body.nama;
    var jurusan = req.body.jurusan;
    // atau
    // const { nim, Nama, jurusan } = req.body;
    connection.query('INSERT INTO mahasiswa (nim, nama , jurusan) VALUES(?,?,?)',
            [nim, nama , jurusan],
        function(errors , rows , fields){
            if(errors){
                console.log(errors);
            }
            else{
                response.ok('Berhasil menambahkan data', res);
            }
        }
    )
}