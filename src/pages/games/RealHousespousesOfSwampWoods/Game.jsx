/**
 * Application Main Runtime
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React, { Suspense, } from "react";
import { Canvas, } from "@react-three/fiber";

import HomeInstance from "../../../components/3d/HomeView.jsx";
import ThemeMode from "../../../components/ThemeChanger.jsx";

// CSS Imports
import "../../../assets/scss/index.scss";
import "../../../assets/scss/styles.scss";


export default function RealHousespousesOfSwampWoods(props,) {
  return (
    <div className="appBody">
      <header>
        <h1>Real Housespouses of Swamp Woods</h1>
        <h2>RHSW: Season 1</h2>
      </header>
      <div className="intro">
        <p>
          Living my truth, with no regerts.
        </p>
        <div>
          <Canvas>
            <ambientLight />
            <ambientLight position={[0, 5, 5,]} />
            <Suspense fallback={null}>
              <HomeInstance />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <footer>
        <ThemeMode />
      </footer>
    </div>
  );
};
