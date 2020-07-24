fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        response.json()
        .then(data => data.map(names => console.log(names.name)))
    })
