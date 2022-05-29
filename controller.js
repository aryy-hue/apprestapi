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
                connection.log(errors);
            }
            else{
                response.ok(rows, res)
            }
        });
};  