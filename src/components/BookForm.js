import "./BookForm.css";

function BookForm({ bookInfo, onSubmit, onInputChange }) {

  const read = bookInfo?.read === "read";

  const handleSubmit = (event) => {
    onSubmit(event);
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="title">Název: </label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={bookInfo.title}
            onChange={(e) => onInputChange(e.target)}
            required
          />
        </div>
        <div className="form-group">
          <label for="author">Autor: </label>
          <input
            className="form-control"
            name="author"
            type="text"
            value={bookInfo.author}
            onChange={(e) => onInputChange(e.target)}
            required
          />
        </div>
        <div className="form-group">
          <label for="genre">Žánr: </label>
          <select
            className="form-control"
            name="genre"
            value={bookInfo.genre}
            onChange={(e) => onInputChange(e.target)}
          >
            <option value="dobrodruzna">dobrodružná</option>
            <option value="romanticka">romantická</option>
            <option value="horor">horor</option>
            <option value="horor">detektivka</option>
            <option value="naucna">naučná</option>
          </select>
        </div>
        <div className="form-group">
          <label for="year">Rok vydání: </label>
          <input
            className="form-control"
            name="year"
            type="number"
            min="0"
            value={bookInfo.year}
            onChange={(e) => onInputChange(e.target)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label for="pages">Počet stran: </label>
          <input
            className="form-control"
            name="pages"
            type="number"
            min="0"
            value={bookInfo.pages}
            onChange={(e) => onInputChange(e.target)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label for="image">Obrázek (url): </label>
          <input
            className="form-control"
            name="image"
            value={bookInfo.image}
            onChange={(e) => onInputChange(e.target)}
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Uložit
        </button>
      </form>
    </div>
  );
}

export default BookForm;
