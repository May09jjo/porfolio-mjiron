import React from 'react';
import { Link } from "gatsby";
import { Hamburger } from "../icons";
import Logo from "./logo";
import NavLinks from "./navlinks";
import "../../style/navbar.less";


export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarPlaceholderHeight: 100
        };

    }
    
    changeNavbarHeight() {
        /* While the name states changeNavbarHeight, this does not directly change the navbar height. It simply reduces the width of the logo, which reduces the height and thereby the overall navbar height.

		Also this slightly reduces the vertical padding

		*/

        window.addEventListener("scroll", function() {
            if (this.scrollY > 0) {
                document.querySelector("nav").classList.add("scrolled");
            } else {
                document.querySelector("nav").classList.remove("scrolled");
            }
        });
    }

    changeNavbarPlaceholderHeight() {
        let navBar = document.querySelector("nav");
        let navbarPlaceholderHeight = navBar.offsetHeight;
        this.setState({
            navbarPlaceholderHeight: navbarPlaceholderHeight
        });
    }

    render() {
        const placeholder = this.props.placeholder;
        return(
            <React.Fragment>
                <header><nav className="text-secondary" >
                 <a href="#mobilenav" id="menu-open" >
                     <span className="icon">
                         {/* llama el icono Hamburger */}
                         <Hamburger />
                     </span>
                 </a>
                 <Link to="/">
                     <Logo />
                 </Link>
                 <NavLinks />
                </nav></header>
                {placeholder && (
                    <div
                        className="navbar-placeholder"
                        style={{
                            height: this.state.navbarPlaceholderHeight + "px"
                        }}
                    ></div>
                )}
            </React.Fragment>
        )
    }


}