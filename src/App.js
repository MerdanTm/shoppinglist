import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/Form";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";

const App = () => {
  const [arrays, setArrays] = useState([
    {
      id: 1,
      name: "Apple",
      quantity: 0,
      rating: 0,
      button: "Dismiss",
    },
  ]);

  changeQuantity = (quantity) => {
    setArrays((arrays[0].quantity = quantity));
  };

  return (
    <div className="App">
      <FormInput arrays={arrays} setArrays={setArrays} />
      <br />
      <Table1
        arrays={arrays}
        setArrays={setArrays}
        changeQuantity={changeQuantity}
      />
      <br />
      <Table2 arrays={arrays} />
    </div>
  );
};

export default App;
