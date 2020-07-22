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
                reject('Hari ini bukan hari kerja');
            }
        }, 3000);
    });
}

weekdaysCheck('ahad')
    .then(result => console.log(result))
    .catch(error => console.log(error));


// try catch