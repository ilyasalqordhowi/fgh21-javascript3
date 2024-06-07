const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April','Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }

    }, 4000)
}
const showMonth = (error, months) => {
    if (error) {
        console.log(error);
    } else {
        months.map((month, i) => {
            console.log((i+1)+'.'+(month));
        });
    }
};

// Memanggil getMonth dengan callback showMonth
getMonth(showMonth);