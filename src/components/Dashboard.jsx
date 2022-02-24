import React from "react";
import AddTask from "./tasks/AddTask";
import Tasks from "./tasks/Tasks";

export default function Dashboard() {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
}
