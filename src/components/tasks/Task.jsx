import React from "react";

function Task() {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Learning React Js</td>
        <td>
          <i class="fa-solid fa-circle-check text-success"></i>
        </td>
        <td>
          <i class="fa-solid fa-trash-can text-danger" />
        </td>
      </tr>
    </>
  );
}

export default Task;