let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  if (bookName.includes("Beauty")) {
    favoriteBooks.push(bookName);
  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts"); 
addFavoriteBook("The Beauty of Living Twice"); //has
addFavoriteBook("Black Beauty"); //has
addFavoriteBook("Monstrous Beauty"); //has

console.log(favoriteBooks);
