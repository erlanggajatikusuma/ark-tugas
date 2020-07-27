// Divide and sort

// Versi 2
const divideAndSort = (number) => {
    const numbers = number.toString().split(0);
    const output = [];
  
    for (let i = 0; i < numbers.length-1; i++) {
      const sorts = numbers[i].split('').sort().join('');
  
      output.push(sorts);
    }
    return Number(output.join(''));
  }
  
  
  divideAndSort(5210993201104300);
