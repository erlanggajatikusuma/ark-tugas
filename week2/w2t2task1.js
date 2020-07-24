const weekdaysCheck = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDays = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let check = dataDays.find(item => {
                return item === day.toLowerCase();
            })
            if(check) {
                resolve(check);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
}

weekdaysCheck('ahad')
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

// then fungsi : untuk menangkap promise yang berhasil
// catch fungsi : untuk menangkap promise yang gagal


// try catch


const check = async (day) => {
    console.log('Mulai');
    let result = null;
    try {
        result = await weekdaysCheck(day)
    } catch (error) {
        console.log(error.message)
    }
    console.log(result);
    console.log('Selesai');
}

check('Kamis');

// try : untuk mengecek apakah suatu kondisi error
// catch : untuk menangkap kondisi error dari try