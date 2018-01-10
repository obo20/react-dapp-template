import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <nav className="pt-navbar .modifier">
                    <div className="pt-navbar-group pt-align-left">
                        <div className="pt-navbar-heading">Base React BluePrint App</div>
                        <span className="pt-navbar-divider"></span>
                        <Link to="/">
                            <button className="pt-button pt-minimal pt-icon-home">Main Page</button>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;

