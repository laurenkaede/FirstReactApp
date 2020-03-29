// Main File //

import React from "react";
import "./App.css";
import Myintro from "./components/Myintro";

class App extends React.Component {
  render() {
    return (
      // JSX - NOT HTML
      <div>
        <Myintro name="Lauren" city="Manchester" job="Software Developer"/>
        <Myintro name="Marie" city="Southport" job="Finance Officer"/>
        <Myintro name="Callum" city="Las Vegas" job="Mechanic"/>
        <Myintro name="Becka" city="Rome" job="Children's Illustrator"/>
      </div>
    );
  }
}

export default App;
