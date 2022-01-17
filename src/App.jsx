/**
 * Application Main Runtime
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React from "react";
import { Canvas } from "@react-three/fiber";

import ThemeMode from "./components/ThemeChanger.jsx";
import FirstSpinner from "./components/spinners/FirstSpinner.jsx";
import FirstShape from "./components/3d/FirstShape.jsx";
import "./assets/scss/index.scss";
import "./assets/scss/styles.scss";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Tommy P. Keane</h1>
      </header>
      <div className="intro">
        <p>
          Hiya! Welcome to my website.
        </p>
        <p>
          This is the personal, infotainment web-portal of me, <span className="name-tommy">Tommy P. Keane</span>, a vegan software-engineer-slash-data-scientist-slash-cloud-systems-architect. If you're lookin' for a famous <span className="name-tommy">Tommy P. Keane</span>, that is most definitely not me. If the <span className="name-tommy">Tommy P. Keane</span> that you're lookin' for was born in the mid-1980s in the United States of America, then you're probably at the right place.
        </p>
        <p>

        </p>
        <section>
          <FirstSpinner
            // type="TriangleSpinner"
            // height={100} // [px]
            // width={100} // [px]
            // timeout={15_000} // [ms]
          />
        </section>
        <div>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <FirstShape position={[-1.2, 0, 0]} />
            <FirstShape position={[1.2, 0, 0]} />
          </Canvas>
        </div>
      </div>
      <footer>
        <ThemeMode/>
      </footer>
    </div>
  );
};

export default App;
