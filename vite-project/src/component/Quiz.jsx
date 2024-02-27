import React from "react";

function Quiz() {
  return (
    <div className="quiz-container">
      <h2>Question</h2>

      <div>
        <span>1 of 15</span>
        <h5>Which is the only mammal that can jump?</h5>
      </div>

      <div className="options">
        <p className="option">Dog</p>
        <p className="option">Goat</p>
      </div>

      <div className="options">
        <p className="option">Elephant</p>
        <p className="option">Lion</p>
      </div>

      <div className="buttons">
        <button className="change Previous">Previous</button>
        <button className="change next">Next</button>
        <button className="change quit">Quit</button>
      </div>
    </div>
  );
}

export default Quiz;
