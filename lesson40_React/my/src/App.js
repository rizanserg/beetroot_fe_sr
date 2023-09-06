import React from "react";
import './assets/css/App.css';
import logo from "../src/assets/images/icon.png";
import './assets/fonts/lucida-sans-unicode.ttf'
import Main from "./main"

function Header() {
    return (
        <header className={ "site-header" }>
            <p>CSS Weather Forecast </p>
            <img className={ "icon-title" } src={ logo } alt="icontitle"/>
        </header>
    );
}

function Footer() {
    return (
        <footer className={ "site-footer" }>
            <span>Have a nice day and don't forget umbrella if you are in New Delhi now!</span>
        </footer>
    );
}
function App() {
  return (
      <>
          <Header/>
          <Main/>
          <Footer/>
      </>
  );
}

export default App;
