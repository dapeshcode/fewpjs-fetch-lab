const fetchBooks = () => {
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data))
}

//patch request
// 1 explicit method
//2 header (what form of info are we sending? what do we want to recieve back?)
//3 body
//4 maybe.then.then 

//THIS DOES NOT WORK
fetch('some link', { 
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }, 
  body: JSON.stringify(object)

})
//without then -- update in the database 
//with then update in the database and then do something with it (render/ do something else)
//.then
//.then





const renderBooks = (books) => {
  const main = document.querySelector('main')
  const ul = document.createElement('ul')
  books.forEach((book) => {
//authors, country, name, numberOfPages, url
    const li = document.createElement('li')

  
    li.innerHTML = `
      <h1>${book.name}</h1>
      <h3>By: ${book.authors[0]}</h3>

    `

    ul.appendChild(li)


  })
  main.appendChild(ul)


}


fetchBooks()









// fetchBooks -> reference 
// fetchBooks() -> invoke


