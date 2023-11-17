import { join } from "./utils";
// import { join } from "lodash";
import { printAndIncrementCount } from "./utils/singleton";
// import "./style.css";
// import Icon from "./resources/red-white-cat.jpg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  //  const myIcon = new Image();
  //  myIcon.src = Icon;

  //  element.appendChild(myIcon);
  printAndIncrementCount("index");

  return element;
}

document.body.appendChild(component());
