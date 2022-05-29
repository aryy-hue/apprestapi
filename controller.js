'use strict';

var response    = require( './res');
var connection  = require('./koneksi');
const { off, connect } = require('./koneksi');

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
    // const { nim, nama, jurusan } = req.body;
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
    );
}
// mengubah data berdasarkan ID mahasiswa
exports.ubahMahasiswa = function(req,res){
    var id      = req.body.id_mahasiswa;
    var nim     = req.body.nim;
    var nama    = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=? ,  nama=? , jurusan=? WHERE id_mahasiswa=?',[ nim, nama , jurusan ,id], //berurutan
        function(errors, rows, fields){
            if(errors){
                console.log(errors);
            }
            else{
                response.ok('Data berhasil di ubah',res);
            }
        }
    );
}
// menghapus mahasiswa berdasarkan id
exports.hapusMahasiswa = function(req, res){
    var id      = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id],
        function(errors, rows, fields){
            if(errors){
                console.log(errors);
            }
            else{
                response.ok('Data berhasil di hapus!!',res);
            }
        }
    );
}
//menampilkan matakuliah group
exports.tampilGroupMatakuliah = function(req , res){
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan , matakuliah.id_matakuliah , matakuliah.matakuliah ,matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa;',
        function(errors , rows , fields){
            if(errors){
                console.log(errors);
            }
            else{
                response.okenested(rows,res);
            }
        }
    )

}