import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import reactDom from "react-dom";
import QuantityCounter from "./QuantityCounter";
import RatingCounter from "./RatingCounter";
import Table2 from "./Table2";
const Table1 = ({ arrays, setArrays }) => {
  return (
    <div>
      <h2>Table 1 Componenet</h2>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Quantity</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrays.map((obj) => {
            return (
              <React.Fragment>
                <tr key={obj.id}>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>
                    <QuantityCounter arrays={arrays} setArrays={setArrays} />
                  </td>
                  <td>
                    <RatingCounter arrays={arrays} setArrays={setArrays} />
                  </td>
                  <td>
                    <button>{obj.button}</button>
                  </td>
                </tr>
                <tr key={obj.id}>
                  <td>{obj.quantity}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
        <Table2 arrays={arrays} setArrays={setArrays} />
      </ReactBootStrap.Table>
    </div>
  );
};

export default Table1;
