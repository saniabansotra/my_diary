import React, { useState } from "react";
const Diary = () => {
  const [story, setstory] = useState([]);
  const [title, newtitle] = useState("");
  const [description, newdescription] = useState("");
  const [date, newdate] = useState("");
  const addstory = () => {
    let oldstory = [...story];
    let newstory = {
      Title: title,
      Date: date,
      Description: description,
    };
    oldstory.push(newstory);
    setstory(oldstory);
  };
  const updatestory = (currentIndex) => {
    const oldStory = [...story];
    oldStory.title = currentIndex.title;
    oldStory.date = currentIndex.date;

    new setstory(oldStory);
  };
  const deletestory = (c) => {
    let oldStory = [...story];
    const newstory = oldStory.filter((v, i) => v.title != c.title);
    setstory(newstory);
  };

  return (
    <>
      <img src="./component/extras/diary.png" alt="MY DIARY" />
      <div id="div2">
        <h1 style={{ color: "rgb(143, 250, 35" }}>SECRET KEEPER</h1>
        <label style={{ color: "rgb(143, 250, 35" }}>DATE</label>
        <input
          value={date}
          onChange={(e) => newdate(e.target.value)}
          type="text"
        />
        <br />
        <label style={{ color: "rgb(143, 250, 35" }}>TITLE HERE: </label>
        <input
          value={title}
          onChange={(e) => newtitle(e.target.value)}
          type="text"
        />
        <br />
        <label style={{ color: "rgb(143, 250, 35" }}> ABOUT TODAY : </label>
        <textarea
          rows="5"
          cols="50"
          value={description}
          onChange={(e) => newdescription(e.target.value)}
          type="text"
        />
        <br />

        <button
          style={{ backgroundColor: "rgb(143, 250, 35" }}
          type="button"
          onClick={() => addstory()}
        >
          Add Story
        </button>
      </div>
      {story.map((v, i) => {
        return (
          <div1 key={i}>
            <ul style={{ color: "rgb(143, 250, 35" }}>
              <li>Date: {date}</li>
              <li> Title: {title}</li>
              <li>Description: {description}</li>
            </ul>
            <button
              style={{ backgroundColor: "rgb(143, 250, 35" }}
              onClick={() => deletestory(v)}
              type="button"
            >
              Delete Me
            </button>
            <button
              style={{ backgroundColor: "rgb(143, 250, 35", margin: "2%" }}
              onClick={() => updatestory(v)}
              type="button"
            >
              Update Me
            </button>
          </div1>
        );
      })}
    </>
  );
};

export default Diary;
