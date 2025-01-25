import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks,navLinkItem, navLinkText } from './layout.module.css'

const basicStyle = {
    color: '#232129',
    padding: '3rem',
    fontFamily: 'sans-serif'
}

const h1Style = {
    color: '#345678',
    marginBottom: '1rem'
}

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <div style={basicStyle}>
                <main>
                    <h1 style={h1Style} className={heading}>{pageTitle}</h1>
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>Home</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>About Me</Link>
                            </li>
                        </ul>
                    </nav>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;