import React from "react";
import { data } from "./utils/data/data";
import { Dropdown } from "./components/Dropdown";
import "./utils/styles/styles.scss"

const App = () => {
  return (
    <div>
      <Dropdown itemsData={data}/>
    </div>
  );
}

export default App;
