const seleksiNilai = (num1, num2, arr) => {
    if(num1 < num2 && arr.length > 5 ) {
        const data = arr.filter(item => {
            if(num1 < item && item <= num2) {
                return item;
            }
        });
        const dataSort = data.sort((a, b) => a-b);
        console.log(dataSort);
    } else if ( num1 > num2) {
        console.log('Nilai akhir harus lebih besar dari nilai awal');
    } else if (arr.length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
}