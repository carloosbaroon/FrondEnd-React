import React, {Component} from "react";
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        //Biding this.toggleNav variable to toggleNav to make it available
        // instead of using an arrow function
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            //Using a React Fragment to group a lot of elements and return them
            <>
                {/* We are using expand md so in Medium to Large screens we Header is shown full
                    In case  it's a screen from xsm to sm, we are using the Collapse Header*/}
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                                 alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion
                                    experience. Our lipsticking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Header;