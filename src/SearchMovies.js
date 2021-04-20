import React from "react";

function SearchMovie() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Inception"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovie;
