const divideAndSort = (number) => {
    const sorts = [...`${number}`].sort();
    const numbers = Number(sorts.join(''))
    
    console.log(numbers);
}

divideAndSort(120409430)