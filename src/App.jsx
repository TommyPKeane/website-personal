/**
 * Application Main Runtime
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React from "react";
import ThemeMode from "./components/ThemeChanger.jsx";
import "./assets/scss/styles.scss";

const App = () => {
  return (
    <div className="app">
      <h1>Developers Blog</h1>
      <ThemeMode/>
      <p>your journey to becoming a better software engineer</p>
      <section>
        <div className="card">
          <h2>News Post One</h2>
          <p>Html crash course</p>
        </div>
        <div className="card">
          <h2>News Post Two</h2>
          <p>Css beginners guide</p>
        </div>
        <div className="card">
          <h2>News Post Three</h2>
          <p>introduction to javascript for beginners</p>
        </div>
      </section>
    </div>
  );
};

export default App;
