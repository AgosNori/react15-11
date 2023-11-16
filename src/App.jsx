import { Component } from "react";
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 0, rating: 3, title: 'Red Queen', image: 'Libro1.jpg' },
        { id: 1, rating: 5, title: 'El maravilloso mago de oz', image: 'Libro2.webp' },
        { id: 2, rating: 1, title: 'Peter pan ', image: 'Libro3.jpg' },
        { id: 3, rating: 4, title: 'Histoires', image: 'Libro4.webp' },
        { id: 4, rating: 4, title: 'Story books', image: 'libro 5.webp' },
        { id: 5, rating: 4, title: 'El libro de la selva', image: 'Libro6.jpg' },
        { id: 6, rating: 4, title: ' Harry potter', image: 'Libro7.webp' },
        { id: 7, rating: 4, title: 'L"ordine', image: 'Libro8.jpg' },
        { id: 9, rating: 4, title: 'Los minios', image: 'Libro9.jpg' },
        { id: 10, rating: 4, title: 'El regreso a casa', image: 'Libro10.jpg' },
        { id: 11, rating: 5, title: 'Un nuevo viaje', image: 'libro11.webp' },
      ],
      copyBooks: [],
      searchQuery: '',
    };
  }
  // funciones para agregar un nuevo libro
  addBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  // funcion para actualizar la info de un libro
  updateBook = (id, updateBook) => {
    this.setState((prevState) => ({
      books: prevState.books.map((book) =>
        book.id === id ? { ...book, ...updateBook } : book
      ),
    }));
  };

  // funcion para eliminar un libro
  deleteBook = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((book) => book.id !== id),
    }));
  };
  filterBooks = () => {
    const { books, searchQuery } = this.state;
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  render() {
    const filteredBooks = this.filterBooks();

    return (
      <div>
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <img src={`img/${book.image}`} alt={book.title} />
              <p>{book.title}</p>
              <p>Rating: {book.rating}</p>
              <button onClick={() => this.updateBook(book.id, { rating: book.rating + 1 })}>
                Incrementar Rating
              </button>
              <button onClick={() => this.updateBook(book.id, { rating: book.rating - 1 })}>
                Decrementar Rating
              </button>
              <button onClick={() => this.deleteBook(book.id)}>Eliminar</button>
              <button onClick={() => this.updateBook(book.id)}>Actualizar</button>
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => {
          e.preventDefault();
          {/* extrae el valor que tienen los campos ( lo que ingresa el usurio)*/ }
          const title = e.target.title.value;
          const rating = e.target.rating.value;
          const image = e.target.image.value;
          const newBook = {id:Date.now(),title,rating,image};
          this.addBook(newBook);
        }}>
          <label>Titulo: 
            <input type="text" name="title" required/>
          </label>
          <label>Rating: 
            <input type="number" name="rating" required/>
          </label>
          <label>Imagen: 
            <input type="text" name="image" required/>
          </label>
          <button type="submit">Agregar Libro</button>

        </form>

      </div>
    )
  }
}

export default App;