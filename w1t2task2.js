const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;


let rata2 = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;

if (rata2 >= 90) {
    "A"
} else if (rata2 >= 80) {
    "B"
} else if (rata2 >= 70) {
    "C"
} else if (rata2 >= 60) {
    "D"
} else {
    "E"
}

