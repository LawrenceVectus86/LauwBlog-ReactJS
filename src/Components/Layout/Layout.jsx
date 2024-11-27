import PropTypes from 'prop-types'; // {{ edit_1 }}
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx'
import React from 'react';

function Layout({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <Navbar />

            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

Layout.propTypes = { // {{ edit_2 }}
    children: PropTypes.node.isRequired,
};

export default Layout