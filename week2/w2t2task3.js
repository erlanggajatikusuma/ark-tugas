// 1. Program satu
const fruits = ['apple', 'mango', 'grapes', 'banana', 'watermelon']

const getProduct = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let check = fruits.find(fruit => {
                return fruit === item.toLowerCase();
            })
            if(check) {
                resolve(check);
            } else {
                reject(new Error('Buah yang anda cari tidak tersedia'))
            }
        }, 3000);
    });
}

getProduct('Apple')
    .then(result => console.log(result))
    .catch(error => console.log(error));



// 2. Program 2

const sum = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof num1 === 'number' && typeof num2 === 'number') {
                resolve(num1 + num2);
            } else {
                reject(new Error('yang anda masukkan bukan angka'));
            }
        }, 2000);
    });
}

sum(2,10)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));