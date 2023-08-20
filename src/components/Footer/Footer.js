import * as React from 'react'
import './index.css'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Link from '@mui/material/Link'

const Footer = () => {
    return (
        <div style={{ borderTop: '1px solid #eee', backgroundColor: '#eee' }}>
            <div class="container">
                <footer class="py-5 footer-container">
                    <div class="footer-component">
                        <h5 style={{ color: '#f39c12' }}>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    FAQs
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-component">
                        <h5 style={{ color: '#f39c12' }}>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    FAQs
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-component">
                        <h5 style={{ color: '#f39c12' }}>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    FAQs
                                </a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="/#" class="nav-link p-0 text-muted">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5 style={{ color: '#f39c12' }}>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" class="visually-hidden">
                                    Email address
                                </label>
                                <input
                                    id="newsletter1"
                                    type="text"
                                    class="form-control"
                                    placeholder="Email address"
                                />
                                <button
                                    class="btn btn-primary"
                                    type="button"
                                    style={{ backgroundColor: '#f39c12' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </footer>
            </div>
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top container">
                <p>© 2022 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <Link to="https://www.facebook.com/" color="inherit">
                        <Facebook />
                    </Link>
                    <Link to="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                        <Instagram />
                    </Link>
                    <Link to="https://www.twitter.com/" color="inherit">
                        <Twitter />
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer
