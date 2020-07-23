// 1. Program satu
const fruits = ['apple', 'mango', 'grapes', 'banana', 'watermelon']

const getProduct = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let check = fruits.find(fruit => {
                return fruit === item;
            })
            if(check) {
                resolve(check);
            } else {
                reject(new Error('Buah yang anda cari tidak tersedia'))
            }
        }, 3000);
    });
}

getProduct('apel')
    .then(result => console.log(result))
    .catch(error => console.log(error));



// 2. Program 2