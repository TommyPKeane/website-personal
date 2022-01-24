/**
 * Application Main Runtime
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React from "react";

import PageLink from "./components/PageLink.jsx";
import PageRouter from "./components/PageRouter.jsx";

import HomePage from "./pages/HomePage.jsx";
import RealHousespousesOfSwampWoods from "./pages/games/RealHousespousesOfSwampWoods/Game.jsx";

import "./assets/scss/index.scss";
import "./assets/scss/styles.scss";


const App = () => {
  return (
    <div className="app">
      <header>
        <div className="ui secondary pointing menu">
          <PageLink href="/" className="item">
            Home
          </PageLink>
          <PageLink href="/games/realhousespousesofswampwoods" className="item">
            Real Housespouses Of Swamp Woods
          </PageLink>
        </div>
      </header>
      <PageRouter path="/" >
        <HomePage />
      </PageRouter>
      <PageRouter path="/games/realhousespousesofswampwoods" >
        <RealHousespousesOfSwampWoods />
      </PageRouter>
    </div>
  );
};

export default App;
