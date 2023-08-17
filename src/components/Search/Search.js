import React from 'react'
import './index.css'

const Search = () => {
    return (
        <div className="search" style={{ marginTop: 140 }}>
            <div className="row">
                <div className="col-12">
                    <form className="search-form" action="#" method="post">
                        <div class="input-container">
                            <div class="search-box">
                                <input
                                    type="search"
                                    name="search"
                                    placeholder="Type any keywords..."
                                    class="search-input"
                                    style={{ outline: '2px solid #ccc' }}
                                />
                                <button
                                    type="submit"
                                    class="search-button"
                                    style={{ outline: 'none' }}
                                >
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
