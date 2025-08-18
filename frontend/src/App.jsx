import React, { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  const heroData = [
    { text1: "Growth is", text2: "Life" },
    { text1: "Growth is", text2: "Life" },
    { text1: "Growth is", text2: "Life" }
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="app-container">
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
};

export default App;
