import React, { Component } from "react";
// import MenuFilter from "../MenuFilter/MenuFilter";
import { NavLink } from "react-router-dom";

// const imagesFolder = require.context("../../assets/img/", true);

const styles = {
  container:{
    position: "fixed",
    width: "100vw",
    zIndex: "1000"
  },
  header: {
    backgroundColor: "#16356e",
    color: "white",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    display: "flex",
  },
  logo: {
    backgroundImage: "url(./assets/img/logox128.png)",
    width: "32px",
    height: "38px",
    backgroundSize: "cover",
  },
  brand: {
    padding: "10px",
    alignSelf: "start",
    textAlign: "center"
  },
  nav: {
    borderBottom: "solid 1px",
    paddingBottom: "1rem 0",
    justifyContent: "space-between",
    position: "fixed",
  },
  link: {
    display: "block",
    boxSize: "border-box",
    width: "20vw",
    textDecoration: "none",
    padding: "4px",
    backgroundColor: "#1f1933",
    color: "white",
    verticalAlign: "middle",
  }
};

export default class Header extends Component {
  
  mobileMenue() {
    let element = document.getElementsByClassName('nav-link')[0];
    let isVisibleNaw = (element.style.display === 'flex');
    // console.log('se ve?', isVisibleNaw);
    element.style.display = isVisibleNaw ?"none" :  "flex";
  }

  closeMenue() {
    if (window.innerWidth < 420) {
      let element = document.getElementsByClassName('nav-link')[0];
      element.style.display = "none";
    } 
  }
  
  render() {
    console.log('update');
    // listName = window.location.pathname.substring(1) || 'home';
    return (
    <div style={styles.container} tabIndex="1">
      <div className="Header" style={styles.header}>
        <img src="./logox128.png" style={styles.logo} aria-label="emoji" />
        <span style={styles.brand}>
          <div>Streamming List</div>
          {/* <small className="listName">{listName}</small> */}
        </span>
        <span className="displayMenu" onClick={this.mobileMenue}>
          <div></div>
          <div></div>
          <div></div>
        </span>
      </div>
      <nav
        className="nav-link"
        style={styles.nav}
        >
        <NavLink tabIndex="1" onClick={this.closeMenue} to="/favoritos">❤️</NavLink>
        <NavLink tabIndex="2" onClick={this.closeMenue} to="/">Todo</NavLink>
        <NavLink tabIndex="3" onClick={this.closeMenue} to="/subcription">Subscripcion</NavLink>
        <NavLink tabIndex="4" onClick={this.closeMenue} to="/gratis">Gratis</NavLink>
        <NavLink tabIndex="5" onClick={this.closeMenue} to="/argentinos">Argentinos</NavLink>
        <NavLink tabIndex="6" onClick={this.closeMenue} to="/musica">Musica</NavLink>
        <NavLink tabIndex="7" onClick={this.closeMenue} to="/animacion">Animacion</NavLink>
        <NavLink tabIndex="8" onClick={this.closeMenue} to="/en-espaniol">En Español</NavLink>
        <NavLink tabIndex="9" onClick={this.closeMenue} to="/deporte">Deporte</NavLink>
        <NavLink tabIndex="10" onClick={this.closeMenue} to="/tv-en-vivo">TV En vivo</NavLink>
      </nav>
    </div>
    );
  }
}
