'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    app.route('/')
        .get(jsonku.index); 
    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);
    app.route('/tampil/:id')
        .get(jsonku.tampilkanmahasiswaid);
    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);
    app.route('/ubah')
        .put(jsonku.ubahMahasiswa);
    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa);
    app.route('/tampilGroupMatkul')
        .get(jsonku.tampilGroupMatakuliah);
    }