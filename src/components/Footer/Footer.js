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
                        <h5 style={{ color: '#f39c12' }}>Recipe Organizer</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Many families struggle to locate culinary recipes that are
                                    appropriate for their hobbies or eating habits.
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-component pl-4">
                        <h5 style={{ color: '#f39c12' }}>Context</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    A recipe organizer streamlines meal planning by centralizing
                                    recipe storage. It saves time, reduces stress, and promotes
                                    healthy eating through features like search, meal planning,
                                    filtering, and nutritional info. Its goal is to simplify meal
                                    preparation and enhance the overall dining experience.
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-component pl-4">
                        <h5 style={{ color: '#f39c12' }}>Team Members</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Nguyễn Hữu Vinh
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Nguyễn Công Vũ
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Đào Anh Tú
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/#" className="nav-link p-0 text-muted">
                                    Nguyễn Thanh Tùng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5 style={{ color: '#f39c12' }}>SWP391_3W Mentor Lại Đức Hùng</h5>
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
