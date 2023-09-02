import {
  areElementsInOrder,
  checkElementText,
  isElementChildOf,
} from "../helpers/domHelpers";
export default {
  title: "Basic layout",
  category: "Basic HTML",
  defaultCode: {
    htmlCode: "<div>\n<!--Write code here-->\n</div>",
    cssCode:
      "/*Don't touch the code below*/\ndiv {\n   border: solid 2px red;\n}\ndiv > div {\n   border: solid 2px blue;\n}",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const div = frame.querySelector("div");
            return isElementChildOf(div, frame);
          },
          error: "Make sure the div still exists!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "You need to add a h1 in the div!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return checkElementText(h1, "John Doe");
          },
          error: "Change the content of the h1 to John Doe!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const div = frame.querySelector("div");
            return isElementChildOf(h1, div);
          },
          error: "Your h1 needs to be in the div!",
        },
      ],
      instruction: 'Add an h1 tag with the content of "John Doe"',
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            return div.length > 1;
          },
          error: "You need 2 divs!",
        },
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            return isElementChildOf(div[1], frame);
          },
          error: "Add a div inside the second div!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const div = frame.querySelectorAll("div");
            return isElementChildOf(h1, div[0]);
          },
          error: "Don't delete the h1 in the previous step!",
        },
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");

            return isElementChildOf(div[1], div[0]);
          },
          error: "Make sure the second div is inside the initial one",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const div = frame.querySelectorAll("div");

            return areElementsInOrder([h1, div[1]], div[0]);
          },
          error: "Make sure the div is below the h1",
        },
      ],
      instruction: "Add a div inside our current div below the h1",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            return isElementChildOf(div[1], frame);
          },
          error: "Make sure the second div is nested in the first one!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            const div = frame.querySelectorAll("div");

            return isElementChildOf(p, div[1]);
          },
          error:
            "Make sure the p is put inside the nested div, not the initial one",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            return checkElementText(p, "Software engineer");
          },
          error: "Change the content of the p to Software engineer!",
        },
      ],
      instruction:
        "Add a p inside our nested div with the content of 'Software engineer'",
    },
  ],
};
