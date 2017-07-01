import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends Component {


    renderAuthMenu(){
        return [
                <li key='signout' className="nav-item">
                    <Link to="/signout">
                       Logout
                    </Link>
                </li>,
            <li key="features" className="nav-item">
                <Link className="nav-link" to="/features">
                    Features
                </Link>
            </li>,
            <li key="audience" className="nav-item">
                <Link className="nav-link" to="/audience">
                    Audience
                </Link>
            </li>,
            <li key="speaker" className="nav-item">
                <Link className="nav-link" to="/speaker">
                    Speaker
                </Link>
            </li>,
            <li key="board" className="nav-item">
                <Link className="nav-link" to="/board">
                    Board
                </Link>
            </li>
        ]
    }

    renderPublicMenu(){
        return [<li key="signin" className="nav-item">
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                </li>,
                <li key="signup" className="nav-item">
                    <Link className="nav-link" to="/signup">
                        Sign Up
                    </Link>
                </li>,
                <li key="features" className="nav-item">
                    <Link className="nav-link" to="/features">
                        Features
                    </Link>
                </li>,
            <li key="audience" className="nav-item">
                        <Link className="nav-link" to="/audience">
                            Audience
                        </Link>
                    </li>,
                    <li key="speaker" className="nav-item">
                        <Link className="nav-link" to="/speaker">
                            Speaker
                        </Link>
                    </li>,
                    <li key="board" className="nav-item">
                        <Link className="nav-link" to="/board">
                            Board
                        </Link>
                    </li>

        ]
    }

    render(){
        const authenticated = this.props.authenticated;
        return (
            <nav className="navbar navbar-light">
                <Link  to="/" className="navbar-brand"> Holy-Notes </Link>
                <ul className="nav navbar-nav">
                    {authenticated ? this.renderAuthMenu() : this.renderPublicMenu()}
                    <li key="features" className="nav-item">
                        <Link className="nav-link" to="/features">
                            {this.props.appLoaded ? 'Loaded' : null}
                        </Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('state From Header', state);
    return {
        authenticated: state.auth.get("authenticated")
    }
};

export default connect(mapStateToProps)(Header);