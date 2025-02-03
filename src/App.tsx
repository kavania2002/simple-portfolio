import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Loader />
      <div
        className={`bg-primary font-inria-sans transition-all duration-1000 ${
          !loading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
