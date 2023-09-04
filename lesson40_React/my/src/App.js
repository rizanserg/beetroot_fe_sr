import React from "react";
import './assets/css/App.css';
import logo from "../src/assets/images/icon.png";
import lisbon from '../src/assets/images/icon-lisbon.png'
import paris from '../src/assets/images/icon-paris.png'
import belgrade from '../src/assets/images/icon-belgrade.png'
import venice from '../src/assets/images/icon-venice.png'
import tel from '../src/assets/images/icon-Tel-Avive.png'
import cair from '../src/assets/images/icon-cair.png'
import york from '../src/assets/images/icon-York.png'
import delhi from '../src/assets/images/icon-Delhi.png'
import francisco from '../src/assets/images/icon-Francisco.png'
import tokyo from '../src/assets/images/icon-Tokyo.png'
import sydney from '../src/assets/images/icon-Sydney.png'
import './assets/fonts/lucida-sans-unicode.ttf'

function Header() {
    return (
        <header className={ "site-header" }>
            <p>CSS Weather Forecast </p>
            <img className={ "icon-title" } src={ logo } alt="icontitle"/>
        </header>
    );
}
function Main() {
    return (
      <main>
          <div className={ "container" }>
              <div className={ "Lisbon" }>
                  <p className={ 'text-group' }>Lisbon</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>21°C</p>
                      <img className={ 'icon-weather' } src={ lisbon } alt="icon-lisbon"/>
                  </div>
              </div>
              <div className={ "Paris" }>
                  <p className={ 'text-group' }>Paris</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>11°C</p>
                      <img className={ 'icon-weather' } src={ paris } alt="paris"/>
                  </div>
              </div>
              <div className={ "Belgrade" }>
                  <p className={ 'text-group' }>Belgrade</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>15°C</p>
                      <img className={ 'icon-weather' } src={ belgrade } alt="Belgrade"/>
                  </div>
              </div>
              <div className={ "Venice" }>
                  <p className={ 'text-group' }>Venice</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>21°C</p>
                      <img className={ 'icon-weather' } src={ venice } alt="venice"/>
                  </div>
              </div>
              <div className={ "Tel-Avive" }>
                  <p className={ 'text-group' }>Tel-Avive</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>32°C</p>
                      <img className={ 'icon-weather' } src={ tel } alt="Tel-Avive"/>
                  </div>
              </div>
              <div className={ "Cair" }>
                  <p className={ 'text-group' }>Cair</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>21°C</p>
                      <img className={ 'icon-weather' } src={ cair } alt="Cair"/>
                  </div>
              </div>
              <div className={ "New-York" }>
                  <p className={ 'text-group' }>New-York</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>17°C</p>
                      <img className={ 'icon-weather' } src={ york } alt="york"/>
                  </div>
              </div>
              <div className={ "New-Delhi" }>
                  <p className={ 'text-group' }>New-Delhi</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>17°C</p>
                      <img className={ 'icon-weather' } src={ delhi } alt="delhi"/>
                  </div>
              </div>
              <div className={ "San-Francisco" }>
                  <p className={ 'text-group' }>San-Francisco</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>15°C</p>
                      <img className={ 'icon-weather' } src={ francisco } alt="francisco"/>
                  </div>
              </div>
              <div className={ "Tokyo" }>
                  <p className={ 'text-group' }>Tokyo</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>8°C</p>
                      <img className={ 'icon-weather' } src={ tokyo } alt="tokyo"/>
                  </div>
              </div>
              <div className={ "Sydney" }>
                  <p className={ 'text-group' }>Sydney</p>
                  <div className={ "group" }>
                      <p className={ 'text-group' }>25°C</p>
                      <img className={ 'icon-weather' } src={ sydney } alt="sydney"/>
                  </div>
              </div>
          </div>
      </main>
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
