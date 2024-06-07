const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
// Menggunakan then-catch untuk menangani promise
cekHariKerja('senin')
//jika retrun promise yang dikirim adalah senin
    .then((result) => {
        console.log((result) +' '+ 'adalah hari kerja');
    })
    //jika return promise yang dikirm tidak hari senin
    .catch((error) => {
        console.log(error);
    });

    // Menggunakan try-catch dalam fungsi async untuk menangani promise
    const cekHari = async (day) => {
        try {
            const result = await cekHariKerja(day);
            console.log((result) +' '+ "adalah hari kerja");
        } catch (error) {
            console.log(error);
        }
    }
    
    // pemanggilan fungsi async
    cekHari('senin');

    
   