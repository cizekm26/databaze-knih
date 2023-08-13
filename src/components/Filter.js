import "./Filter.css";

function Filter({ filterInput, onFilterChange, onRemoveFilter }) {
  return (
    <>
      <form className="filter-form">
        <div className="form-group mb-2">
          <label for="title">Název: </label>
          <input
            id="title"
            name="title"
            type="text"
            value={filterInput?.title}
            onChange={(e) => onFilterChange(e.target)}
          />
        </div>
        <div className="form-group mb-2">
          <label for="author">Autor: </label>
          <input
            id="author"
            name="author"
            type="text"
            value={filterInput?.author}
            onChange={(e) => onFilterChange(e.target)}
          />
        </div>
        <div className="form-group mb-2">
          <label for="zanrFiltr">Žánr: </label>
          <select
            id="zanrFiltr"
            value={filterInput?.genre}
            onChange={(e) => onFilterChange(e.target)}
            name="genre"
          >
            <option value="">všechny</option>
            <option value="dobrodruzna">dobrodružná</option>
            <option value="romanticka">romantická</option>
            <option value="horor">horor</option>
            <option value="horor">detektivka</option>
            <option value="naucna">naučná</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label>Rok vydáni</label>
          <div className="form-group mb-2">
          <label for="yearFrom">Od: </label>
            <input
              id="yearFrom"
              min="0"
              name="yearFrom"
              type="number"
              onChange={(e) => onFilterChange(e.target.value)}
            />
            </div>
            <div className="form-group mb-2">
          <label for="yearTo">Do: </label>
          <input
            id="yearTo"
            min="0"
            name="yearTo"
            type="number"
            onChange={(e) => onFilterChange(e.target.value)}
          />
          </div>
        </div>
        <button
            className="btn btn-primary"
          onClick={(e) => onRemoveFilter()}
          type="reset"
        >Zrušit filtr</button>
      </form>
    </>
  );
};

export default Filter;
