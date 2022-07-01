import React from "react";
//props
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navigation'>
      <i className={icon} />
      <h1 className='navigation-header'> {title}</h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Movie Suggestions",
  icon: "nav-icon fa-solid fa-film fa-2x",
};
export default Navbar;
