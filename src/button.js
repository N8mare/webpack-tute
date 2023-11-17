import { identity } from "./utils/index";

function button() {
  const element = document.createElement("button");
  element.innerHTML = "Click Me!!";

  element.onclick = identity;

  return element;
}

document.body.appendChild(button());
