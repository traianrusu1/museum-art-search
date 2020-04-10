import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchForm.module.css";

const SearchForm = ({ inputText, setInputText }) => {
  return (
    <div>
      <form className="mt-4 row justify-content-center">
        <div className="form-group col-lg-6">
          <div className="d-flex justify-content-center">
            <h1
              htmlFor="search-art-text-input"
              className={styles.searchHeading}
            >
              {" "}
              Search Art{" "}
            </h1>
          </div>
          <span className={styles.searchIcon}>
            <FontAwesomeIcon icon={faSearch} size="sm" />
          </span>
          <input
            className={"form-control " + styles.searchInput}
            type="text"
            id="search-art-text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
