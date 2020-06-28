import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1
      className="heading"
      style={customStyle}
      contentEditable="true"
      spellCheck="false"
    >
      {greeting}
    </h1>
    <div>
      <img
        className="food-img"
        src="https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612"
      />
      <img
        className="food-img"
        src="https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875__340.jpg"
      />
      <img
        className="food-img"
        src="https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
