import React from 'react';
import NavBarLink from './NavBarLink.jsx';

import './NavBar.scss';

const NavBar = () => {

    const navLinks = [
        {
          to: "/",
          label: "Home"
        },
        {
            to: "/User",
            label: "User"
          },
        {
          to: "/Contact",
          label: "Contact"
        }
      ];

    return(
    <header>
        <div className="logo">
            <h1>React Template</h1>
            <p>with babel and webpack!</p>
        </div>
        <nav>
            <ul>
            {navLinks.map((item) => {
                return (
                <NavBarLink
                    key={item.label + 1}
                    activeOnlyWhenExact={true}
                    to={item.to}
                    label={item.label}
                />
                );
            })}
            </ul>
        </nav>
      </header>
    );
}

export default NavBar;