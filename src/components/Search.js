import React from 'react'

export const Search = () => {
    return (
        <div className="container">
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
