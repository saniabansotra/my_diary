import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Task = () => {
  const [newtask, settask] = useState([]);
  const [newtasktitle, setnewtasktitle] = useState("");
  const [newtaskdescription, setnewtaskdescription] = useState("");
  const [taskstatus, settaskstatus] = useState("To Do");
  const [newtaskduedate, setnewtaskduedate] = useState([new Date()]);
  const [button1, setbutton] = useState("Start Task");
  const [button2, setbutton2] = useState("Complete");

  const createTask = () => {
    const oldtask = [...newtask];
    const Uptask = {
      taskname: newtasktitle,
      taskdescription: newtaskdescription,
      taskdate: newtaskduedate,
      taskstatus: taskstatus,
    };
    oldtask.push(Uptask);
    settask(oldtask);
  };
  const updatestatus = (v, c) => {
    const oldtask = [...newtask];
    const taskstatus = oldtask[c].taskstatus;
    if (taskstatus === "To Do") {
      oldtask[c].taskstatus = "In Progress";
      settaskstatus(oldtask);
    } else if (taskstatus === "In Progress") {
      oldtask[c].taskstatus = "Completed";
      settaskstatus(oldtask);
    } else if (taskstatus === "Completed") {
      oldtask[c].taskstatus = "To Do";
      settaskstatus(oldtask);
    }
  };
  // const updatetask = (c) => {
  //   const oldtask = [...newtask];

  //   if (oldtask[c] === c && taskstatus === "In Progress") {
  //     setbutton("Ongoing");
  //   }
  // };
  const getcurrentbutton = (taskstatus) => {
    if (taskstatus === "To Do") {
      return "Start";
    } else if (taskstatus === "In Progress") {
      return "Complete";
    } else if (taskstatus === "Completed") {
      return "Restart";
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "lightgoldenrodyellow" }}>
        <h1>Task Management </h1>
        <div className="mt-2;">
          <label>Task Title </label>
          <input
            value={newtasktitle}
            onChange={(e) => setnewtasktitle(e.target.value)}
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Task Description</label>
          <textarea
            value={newtaskdescription}
            onChange={(e) => setnewtaskdescription(e.target.value)}
            type="text"
            placeholder="Enter Description"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Task Due Date</label>
          <input
            value={newtaskduedate}
            onChange={(e) => setnewtaskduedate(e.target.value)}
            type="date"
          />
        </div>
        <br />
        <button
          class="createtask"
          style={{ backgroundColor: "lightpink", padding: "1%" }}
          onClick={() => createTask()}
        >
          click me
          <AddBoxIcon />
        </button>
      </div>
      {newtask.map((v, i) => {
        return (
          <div key={i}>
            <h3> New Task</h3>
            <ul>
              <li>Title: {v.taskname}</li>
              <li>Description:{v.taskdescription}</li>
              <li>Date:{v.taskdate}</li>
              <li>Status:{v.taskstatus}</li>
            </ul>
            <button
              onClick={() =>
                settask((oldtask) => oldtask.filter((v, index) => index !== i))
              }
              type="button"
            >
              Delete
            </button>
            {/* <button
              type="button"
              onClick={() =>
                settask((oldtask) =>
                  oldtask.map((item, newindex) =>
                    newindex === i
                      ? { ...item, tasktatus: "In Progress" }
                      : item
                  )
                )
              }
            >
              start task
            </button> */}

            <button onClick={() => updatestatus(v, i)}>
              {getcurrentbutton(v.taskstatus)}
            </button>

            {/* <button
              onClick={() => {
                // updatetask2(i);
              }}
            >
              {button2}
            </button> */}
          </div>
        );
      })}
    </>
  );
};
export default Task;
