import React from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu'


class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }




    render() {
        const { logout, token } = this.props

        return (
            <div>
                <Menu disableAutoFocus isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)} >
                    <div>
                        <h2 className="sideBarTitle"> VICE & REWARDS </h2>
                       
                        <Link id="home" className="menu-item" onClick={() => this.closeMenu()} to="/"> HOME </Link>
                        <Link id="profile" className="menu-item" onClick={() => this.closeMenu()} to="/profile"> REWARDS </Link>
                        <Link id="budget" className="menu-item" onClick={() => this.closeMenu()} to="/budget"> VICES </Link>
                        
                        <button className="logout" onClick={logout}>Logout</button>
                    </div>
                </Menu>
            </div >
        )
    }
}

export default NavBar