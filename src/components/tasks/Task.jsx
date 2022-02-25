import React from "react";

function Task() {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Learning React Js</td>
        <td>
          <i className="fa-solid fa-circle-check text-success" />
        </td>
        <td>
          <i
            className="fa-solid fa-trash-can text-danger"
            style={{ cursor: "pointer" }}
          />
        </td>
      </tr>
    </>
  );
}

export default Task;
