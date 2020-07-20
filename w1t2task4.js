let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// 4.1 Ubah data
const hobbies = {
    hobbies : ['gaming', 'drawing', 'hiking']
}

const myBio = {...data, ...hobbies,
    name: "Erlangga Jatikusuma",
    email: "erlanggajatikusuma007@gmail.com"
};


console.log(myBio);

// 4.2 Ambil data
const {street, city} = data.address;

    