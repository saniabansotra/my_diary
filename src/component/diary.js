import React, { useState } from "react";
import diary from "./extras/diary.png";
const Diary = () => {
  const [story, setstory] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState(new Date());

  const addstory = () => {
    let oldstory = [...story];
    let newstory = {
      Date: date,
      Title: title,
      Description: description,
    }; 
    oldstory.push(newstory);
    setstory(oldstory);
  };

  const updatestory = (currentIndex) => {
    const oldStory = [...story];
    oldStory[currentIndex].Title = title;
    oldStory[currentIndex].Date = date;
    oldStory[currentIndex].Description = description;
    setstory(oldStory);
  };
  const deletestory = (c) => {
    let oldStory = [...story];
    const newstory = oldStory.filter((v, i) => i !== c);
    setstory(newstory);
  };

  return (
    <>
      <nav>
        <h1 style={{ float: "left", color: "green" }}>
          <i>MY DIARY</i>
        </h1>
        <img src={diary} class="image" width="100px" alt="MY DIARY" />
      </nav>

      <div id="div2">
        <h1 style={{ color: "rgb(143, 250, 35" }}>SECRET KEEPER</h1>
        <label style={{ color: "rgb(143, 250, 35" }}>DATE</label>
        <input
          value={date}
          onChange={(e) => setdate(e.target.value)}
          type="date"
        />
        <br />
        <label style={{ color: "rgb(143, 250, 35" }}>TITLE HERE: </label>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
        />
        <br />
        <label style={{ color: "rgb(143, 250, 35" }}> ABOUT TODAY : </label>
        <textarea
          rows="9"
          cols="30"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
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
          <div key={i}>
            <div id="main">
              <h3>
                <i>All About Today :)</i>
              </h3>
              <ul style={{ color: "rgb(143, 250, 35" }}>
                <li>
                  <b> 
                    <i>Date:</i>
                  </b>{" "}
                  {v.Date}
                </li>
                <li>
                  {" "}
                  <b>
                    <i>Title:</i>
                  </b>{" "}
                  {v.Title}
                </li>
                <li>
                  <b>
                    <i>Description:</i>
                  </b>{" "}
                  {v.Description}
                </li>
              </ul>

              <button
                style={{ backgroundColor: "rgb(143, 250, 35" }}
                onClick={() => deletestory(i)}
                type="button"
              >
                Delete Me
              </button>
              <button
                style={{ backgroundColor: "rgb(143, 250, 35", margin: "1%" }}
                onClick={() => updatestory(i)}
                type="button"
              >
                Update Me
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Diary;
