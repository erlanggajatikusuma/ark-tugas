const weekdaysCheck = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDays = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let check = dataDays.find(item => {
                return item === day;
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
    console.log('Selesai')
}

check('senin');