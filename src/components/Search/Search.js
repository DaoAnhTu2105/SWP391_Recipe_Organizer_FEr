import React from 'react'
import './index.css'

const Search = () => {
    return (
        <div className="search">
            <div className="row">
                <div className="col-12">
                    <form className="search-form" action="#" method="post">
                        <div className="input-container">
                            <input
                                type="search"
                                name="search"
                                placeholder="Type any keywords..."
                                className="search-input"
                            />
                            <button type="submit" className="search-button">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
