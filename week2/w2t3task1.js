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
  
  checkPalindrom('makan');


  // Menggunakan looping

const detectPalindrome = (palindrome) => {
    if (typeof palindrome === 'string') {
        const check = palindrome.split('');
        let output = '';
        for (let i = check.length-1; i >= 0; i--) {          
            output += check[i];            
        }
        if (output === palindrome) {
          console.log("Palindrome detected");
        } else {
          console.log("Not a palindrome");
        }
    } else {
        console.log('Inputan bukan string');
    }
}

detectPalindrome('malam');


// 2. Reverse Word

// Menggunakan reverse

const reverse = (str) => {
    const rev = str.split(' ').reverse().join(' ');
    console.log(rev);
}

reverse('saya belajar javascript');


// Menggunakan looping

const reverse = (str) => {
  const rev = str.split(' ');
  let output = [];
  for(let i = rev.length-1; i >= 0; i--) {
    output.push(rev[i]);
  }
  return output.join(' ');
  // console.log(output.join(' '));
}

reverse('saya belajar javascript');