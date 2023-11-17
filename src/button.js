import { identity } from "./utils";
import { printAndIncrementCount } from "./utils/singleton";
import { join } from "./utils";
// import { join } from "lodash";

function button() {
  const element = document.createElement("button");
  element.innerHTML = join(["Click", "Me!!"], " ");

  element.onclick = () => {
    import("./gratitude")
      .then((_) => {
        const gratitudeElement = _.gratitudeComponent();
        element.parentElement.appendChild(gratitudeElement);
      })
      .catch(console.error);
  };

  printAndIncrementCount("button");

  return element;
}

document.body.appendChild(button());
