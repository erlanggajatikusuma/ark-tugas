const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela',
    'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre',
    'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
];

const searchName = (search, limit, callback) => {
  let datas = name.filter(item => {
    return item.toLowerCase().indexOf(search.toLowerCase()) > -1;
  })
  callback(datas, limit);
}

const limit = (data, lim) => {
  let result = data.slice(0, lim);
  console.log(result);
}

searchName('an', 2, limit)