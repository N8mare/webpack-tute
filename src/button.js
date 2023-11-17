import { identity } from "./utils";
import { printAndIncrementCount } from "./utils/singleton";
import { join } from "./utils";
// import { join } from "lodash";

function button() {
  const element = document.createElement("button");
  element.innerHTML = join(["Click", "Me!!"], " ");

  element.onclick = identity;

  printAndIncrementCount("button");

  return element;
}

document.body.appendChild(button());
