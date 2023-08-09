import React from 'react'

export const Search = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form class="search-form" action="#" method="post">
                        <div class="input-container">
                            <input
                                type="search"
                                name="search"
                                placeholder="Type any keywords..."
                                class="search-input"
                            />
                            <button type="submit" class="search-button">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
