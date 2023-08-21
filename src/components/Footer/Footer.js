import * as React from 'react'
import './index.css'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Link from '@mui/material/Link'

const Footer = () => {
    return (
        <div style={{ borderTop: '1px solid #eee', backgroundColor: '#eee' }}>
            <div className="container">
                <footer className="py-5 footer-container">
                    <div className="footer-component">
                        <h5 style={{ color: '#f39c12' }}>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-component">
                        <h5 style={{ color: '#f39c12' }}>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-component">
                        <h5 style={{ color: '#f39c12' }}>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5 style={{ color: '#f39c12' }}>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                />
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    style={{ backgroundColor: '#f39c12', height: 50, marginTop: 7 }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </footer>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top container">
                <p>© 2022 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
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
