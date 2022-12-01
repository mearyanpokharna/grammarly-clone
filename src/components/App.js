import React from "react";
import "./App.css";
import Header from "./Header";
import MainSection from "./MainSection";
import PremiumFeature from "./PremiumFeature";

const App = (props) => {
  return (
    <div className="parentDiv">
      <Header />
      <MainSection />
      <PremiumFeature />
    </div>
  );
};

export default App;
