const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let UN = [mtk, bahasaIndonesia, bahasaInggris, ipa];
let num = 0;

// Validasi
if(mtk && bahasaIndonesia && bahasaInggris && ipa != 0) {
    for (let i = 0; i < UN.length; i++) {
        num += +UN[i];
    }
    // Rata-rata
    let rata2 = num/4;
    console.log(rata2);

    // Grade
    if (rata2 >= 90) {
        "A"
    } else if (rata2 >= 80) {
        "B"
    } else if (rata2 >=70) {
        "C"
    } else if (rata2 >= 60) {
        "D"
    } else {
        "E"
    }

} else {
    console.log('error')
}