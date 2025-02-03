import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import AboutMe from "./sections/AboutMe";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <Loader />
      <div
        className={`bg-primary font-inria-sans transition-all duration-1000 ${
          !loading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}>
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <div className="snap-always snap-center h-screen">
            <Navbar />
            <Hero />
          </div>
          <div className="snap-always snap-center">
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
