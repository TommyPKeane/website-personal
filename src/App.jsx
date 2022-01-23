/**
 * Application Main Runtime
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React, { Suspense, } from "react";
import { Canvas, } from "@react-three/fiber";

// import FirstShape from "./components/3d/FirstShape.jsx";
import HomeInstance from "./components/3d/HomeView.jsx";
import CodeBlock from "./components/articles/CodeBlock.jsx";
import FirstSpinner from "./components/spinners/FirstSpinner.jsx";
import ThemeMode from "./components/ThemeChanger.jsx";

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
          This is the personal, infotainment web-portal of me, <span className="name-tommy">Tommy P. Keane</span>, a vegan software-engineer-slash-data-scientist-slash-cloud-systems-architect. If you&apos;re lookin&apos; for a famous <span className="name-tommy">Tommy P. Keane</span>, that is most definitely not me. If the <span className="name-tommy">Tommy P. Keane</span> that you&apos;re lookin&apos; for was born in the mid-1980s in the United States of America, then you&apos;re probably at the right place.
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
            <pointLight position={[0, 0, -1,]} />
            <Suspense fallback={null}>
              <HomeInstance />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div>
        <h1>Example Code</h1>
        <CodeBlock
          lang="js"
          code="let x = 5;"
        />
      </div>
      <footer>
        <ThemeMode/>
      </footer>
    </div>
  );
};

export default App;
