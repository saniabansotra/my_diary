import React, { useState } from "react";

// const ArrayOfObject = () => {
//   const [students, setstudents] = useState([]);
//   const deleteman = (index) => {
//     // index =2
//     let oldStudents = [...students];
//     let newStudents = oldStudents.filter((v, i) => i !== index);
//     setstudents(newStudents);
//   };
  const updateMan = (currentIndex, newName) => {
    const oldStudents = [...students];
    oldStudents[currentIndex].name = newName;
    setstudents(oldStudents);
  };
  const updateBranch = (currentIndex, newBranch) => {
    const oldStudents = [...students];
    oldStudents[currentIndex].batch = newBranch;
    setstudents(oldStudents);
  };

  const [studentName, setstudentName] = useState("");
  const [packagee, setpackagee] = useState("");
  const [batch, setbatch] = useState("");
  const addstudent = () => {
    const oldStudents = [...students];
    let newStudent = {
      name: studentName,
      batch: batch,
      package: packagee,
    };
    oldStudents.push(newStudent);
    setstudents(oldStudents);
  };

  return (
    <>
      <h1>This is my notes</h1>
      <label>Write note title</label>
      <input
        value={studentName}
        onChange={(e) => setstudentName(e.target.value)}
        type="text"
      />
      <br />
      <label>Write note description</label>
      <input
        value={batch}
        onChange={(e) => setbatch(e.target.value)}
        type="text"
      />
      <br />

      <label>Write remark</label>
      <input
        value={packagee}
        onChange={(e) => setpackagee(e.target.value)}
        type="text"
      />
      <br />

      <button onClick={() => addstudent()} type="button">
        Add Notes
      </button>
      {students.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Note title: {v.name} </li>
              <li> note description: {v.batch} </li>
              <li> remarks: {v.package} </li>
              <button onClick={() => deleteman(i)} type="button">
                Delete Me
              </button>
              <button onClick={() => updateMan(i, "Ashutosh")} type="button">
                Update Me
              </button>
              {/* <button onClick={() => updateBranch(i, "CSE")} type="button">
                Update Branch
              </button> */}
            </ul>
          </div>
        );
      })}
    </>
  );
// };

export default ArrayOfObject;

// CRUD operation