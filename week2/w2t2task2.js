const getMonth = (callback) => {
    setTimeout(() => {
        let error =false;
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, months);
        } else {
            callback('Sorry data not found!');
        }
    }, 4000);
}

const getData = (dataMonths) => {
    const months = dataMonths.map(month => console.log(month));
}

getMonth(getData);

// problem null