import React from 'react'
// impt enter
import PropTypes from 'prop-types'

const Navbar = ({ icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
    
}
 // if props aren't passed in
 Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar