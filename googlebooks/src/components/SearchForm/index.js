import React from 'react';

const SearchForm = props => {
    return (
        <form>
        <div className="form-group">
            <label for="search">Book Search</label>
            <input className="col-12 form-control" value={props.serach} type="text" id="searchInput" name="searchInput" on onChange={props.handleInputChange}></input>
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>Submit</button>
        </form>
    );
};

export default SearchForm;