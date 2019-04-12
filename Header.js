import React from "react";

class Header extends React.Component {
  clickTest = e => {
    e.preventDefault();
    alert();
  };

  render() {
    return (
      <header className="header">
        <ul>
          <li>
            <a onClick={this.clickTest} href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
