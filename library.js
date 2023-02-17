//Write code to retrieve values from form after user clicks submit.
let book_title = document.querySelector('#book-title');
let book_author = document.querySelector('#book-author');
let book_pages = document.querySelector('#book-pages');
let new_title = document.querySelector('#title');
let new_author = document.querySelector('#author');
let new_pages = document.querySelector('#pages')
let submit_button = document.querySelector('#submit-button');
let library_div = document.querySelector('#library');

submit_button.addEventListener('click', (event) => {
    console.log(book_title.value, book_author.value, book_pages.value)
    // new_title.innerHTML = book_title.value;
    // new_author.innerHTML = book_author.value;
    // new_pages.innerHTML = book_pages.value;
    newBook()
    book_author.value = "";
    book_title.value = "";
    book_pages.value = "";
})
//Write code to populate Book card with retrieved data.
function newBook() {
    //Create all the elements
    let card_div = document.createElement('div')
    let title_p = document.createElement('p');
    let author_p = document.createElement('p');
    let pages_p = document.createElement('p');
    let toggle_read = document.createElement('button');
    let toggle_not_read = document.createElement('button');
    let delete_card = document.createElement('button');
    //Populate buttons with text
    toggle_read.appendChild(document.createTextNode("Read"))
    toggle_not_read.appendChild(document.createTextNode("Not read"))
    delete_card.appendChild(document.createTextNode('Remove'))
    //Add corresponding event listeners to buttons
    toggle_read.addEventListener('click', (event) => {
        card_div.style.backgroundColor = 'lightgreen'
    });
    toggle_not_read.addEventListener('click', (event) => {
        card_div.style.backgroundColor = 'red'
    })
    delete_card.addEventListener('click', (event) => {
        card_div.remove()
    })
    card_div.classList = 'card';
    //Populate card with information
    title_p.innerHTML = "Title: " + '<br>' + book_title.value;
    author_p.innerHTML = "Author: " + book_author.value;
    pages_p.innerHTML = "Pages: " + book_pages.value;
    submit_button.innerHTML = "Read"
    //Append all data to card
    card_div.appendChild(title_p);
    card_div.appendChild(author_p);
    card_div.appendChild(pages_p);
    card_div.appendChild(toggle_read);
    card_div.appendChild(toggle_not_read);
    card_div.appendChild(delete_card);
    //Append all cards to library div
    library_div.appendChild(card_div);


}

//Add buttons for Deleting the book, and for toggling read/not read