import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Table2 = ({ arrays }) => {
  console.log(arrays[0].quantity);
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Shopping Card</th>
          </tr>
        </thead>
        <tbody>
          {arrays.map((obj) => {
            return (
              <tr key={obj.id}>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Table2;
