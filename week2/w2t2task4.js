fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const data = response.json()
        .then(data => data.map(names => console.log(names.name)))
    })