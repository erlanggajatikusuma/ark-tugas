const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, months);
        } else {
            callback('Sorry data not found!');
        }
    }, 4000);
}

const getData = (err, dataMonths) => {
    if(err == null) {
        const months = dataMonths.map(month => console.log(month));
    } else {
        console.log(err);
    }


}

getMonth(getData);

// problem null