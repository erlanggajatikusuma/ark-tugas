// 1. Deteksi Palindrome


// Menggunakan reverse
const checkPalindrom = (str) => {
    const palindrome = str.split('').reverse().join('');
    if (str == palindrome ) {
      console.log('Palindrome')
    } else {
      console.log('Bukan palindrome')
    }
  }
  
  checkPalindrom('makan')


// 2. Reverse Word

const reverse = (str) => {
    const rev = str.split(' ').reverse();
    console.log(rev);
}

reverse('saya belajar javascript');