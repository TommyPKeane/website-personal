/**
 * Application Main Runtime
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React from "react";
import ThemeMode from "./components/ThemeChanger.jsx";
import FirstSpinner from "./components/spinners/FirstSpinner.jsx";
import "./assets/scss/styles.scss";

const App = () => {
  return (
    <div>
      <header>
        <h1>Tommy P. Keane</h1>
      </header>
      <div className="app">
        <p>
          Hiya! Welcome to my website.
        </p>
        <p>
          This is the personal, infotainment web-portal of me, <span class="name-tommy">Tommy P. Keane</span>,
          a vegan software-engineer-slash-data-scientist-slash-cloud-systems-architect. If you're lookin' for a famous
          <span class="name-tommy">Tommy P. Keane</span>, that is most definitely not me. If the
          <span class="name-tommy">Tommy P. Keane</span> that you're lookin' for was born in the mid-1980s in the United
          States of America, then you're probably at the right place.
        </p>
        <p>

        </p>
        <section>
          <FirstSpinner
            type="TriangleSpinner"
            height={250} // [px]
            width={250} // [px]
            // timeout={15_000} // [ms]
          />
        </section>
      </div>
      <footer>
        <ThemeMode/>
      </footer>
    </div>
  );
};

export default App;
