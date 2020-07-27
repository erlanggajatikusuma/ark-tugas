// Divide and sort

const divideAndSort = (number) => {
    const numbers = number.toString().split(0);
    const output = [];
  
    for (let i = 0; i < numbers.length-1; i++) {
      const sorts = numbers[i].split('').sort((a, b) => a-b).join('');
  
      output.push(sorts);
    }
    return Number(output.join(''));
  }
  
  
  divideAndSort(5458402344306574);
