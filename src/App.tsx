import React from "react";
import { data } from "./components/Dropdown/data";
import { Dropdown } from "./components/Dropdown";
import "./components/Dropdown/styles.scss"

const App = () => {
  return (
    <div>
      <Dropdown itemsData={data}/>
    </div>
  );
}

export default App;
