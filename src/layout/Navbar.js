import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export class Navbar extends Component {
    componentDidMount() {
      document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".sidenav");
        // eslint-disable-next-line
        var instances = M.Sidenav.init(elems, {});
      });
    }
    render() {
    return (

        <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <a href="#home" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
    
    
      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      </div>
      </nav>



    )
    
  }
    }
export default Navbar;

