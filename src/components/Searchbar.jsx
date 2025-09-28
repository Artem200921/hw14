import React from "react";
import { FaSearch } from "react-icons/fa";

export class Searchbar extends React.Component {
  render() {
    return (
      <div className="Searchbar">
        <form onSubmit={this.props.submit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <FaSearch />
          </button>
          <input
            type="text"
            className="SearchForm-input"
            placeholder="Введіть пошуковий запит"
            id="input"
          />
        </form>
      </div>
    );
  }
}
