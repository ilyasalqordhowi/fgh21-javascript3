const cekNamaSiswa = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const daftarSiswa = ['Ilyas', 'Mamat', 'Faizal', 'Afif', 'Arif', 'Dimas', 'Bagus', 'Abrin', 'Dede', 'Galih'];
            let cek = daftarSiswa.find((item) => {
                return item === nama;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Nama siswa tidak ditemukan'));
            }
        }, 3000);
    });
}

// Menggunakan then-catch untuk menangani promise
cekNamaSiswa('Ilyas')
//jika retrun promise yang dikirim adalah ilyas
    .then((result) => {
        console.log((result)+ ' = ' + 'Nama siswa di temukan');
    })
    //jika return promise yang dikirm tidak ilyas
    .catch((error) => {
        console.log(error);
    });

    // Menggunakan try-catch dalam fungsi async untuk menangani promise
    const cekNama = async (nama) => {
        try {
            const result = await cekNamaSiswa(nama);
            console.log((result)+ ' = ' + 'Nama siswa di temukan');
        } catch (error) {
            console.log(error);
        }
    }
    
    // pemanggilan fungsi async
    cekNama('Ilyas');

    const cekCuaca = (kota) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dataCuaca = {
                    Jakarta: 'Cerah',
                    Bandung: 'Berawan',
                    Surabaya: 'Hujan',
                    Bali: 'Cerah Berawan'
                };
                let cuaca = dataCuaca[kota];
                if (cuaca) {
                    resolve('Cuaca di ' + (kota) + ' adalah ' + (cuaca));
                } else {
                    reject(new Error('Data cuaca tidak ditemukan'));
                }
            }, 3000);
        });
    }
    
    // Menggunakan then-catch untuk menangani promise
    cekCuaca('Jakarta')
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
    
    // Menggunakan try-catch dalam fungsi async untuk menangani promise
    const cekKotaCuaca = async (kota) => {
        try {
            const result = await cekCuaca(kota);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    // Pemanggilan fungsi async
    cekKotaCuaca('Jakarta');
    
   
