// 1. Find all books in a specific genre
db.books.find({ genre: "Programming" })

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// 3. Find books by a specific author
db.books.find({ author: "Robert C. Martin" })

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 49.99 } }
)

// 5. Delete a book by its title
db.books.deleteOne({ title: "Some Book Title" })

// 6. Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 7. Projection: Return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// 8. Sort by price ascending
db.books.find().sort({ price: 1 })

// 9. Sort by price descending
db.books.find().sort({ price: -1 })

// 10. Pagination: Page 1 (5 books)
db.books.find().limit(5)

// 11. Pagination: Page 2 (skip 5)
db.books.find().skip(5).limit(5)
