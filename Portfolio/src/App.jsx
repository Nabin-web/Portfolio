import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import Navbar from "./Navbar";
import "./index.css";
import ParticleConfig from "./Body/particlesConfig.json";
import { loadFull } from "tsparticles";
import About from "./Content/about";
import "./App.css";
import Skills from "./Content/skill";

function App() {
  const [count, setCount] = useState(0);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log();
  }, []);

  return (
    <>
      <div className="App font-alegreya">
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleConfig}
          className="particles-container"
        />
      </div>

      <div className="z-10 relative">
        <Navbar />

        <div style={{ background: "#000033" }} className="">
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
