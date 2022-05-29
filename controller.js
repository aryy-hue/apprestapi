'use strict';

var response = require( './res');
var connection = require('./koneksi');

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
        }
    )
}