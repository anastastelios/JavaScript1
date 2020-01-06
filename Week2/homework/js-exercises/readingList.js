let book1 = {
    title: 'What a curve up!',
    author: 'Jonathan Coe',
    alreadyRead: true
};

let book2 = {
    title: 'The Prince',
    author: 'Niccolo Machiavelli',
    alreadyRead: false
};

let book3 = {
    title: 'Das Kapital',
    author: 'Karl Marx',
    alreadyRead: false
};

let books = [book1, book2, book3];

for (let book in books) {
    console.log(books[book].title + ' by ' + books[book].author);
    if (books[book].alreadyRead) {
        console.log('You already read ' + books[book].title);
    } else {
        console.log('You really need to read ' + books[book].title);
    }
}