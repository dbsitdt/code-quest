import {
  areElementsInOrder,
  checkElementText,
  isElementChildOf,
} from "../utils/domHelpers";
export default {
  title: "Basic layout",
  category: "Basic HTML",
  disabled: { html: false, css: true },
  description: "In this exercise, you will create a basic HTML layout.",
  links: [
    {
      name: "W3Schools Basic HTML",
      url: "https://www.w3schools.com/html/html_basic.asp",
    },
  ],
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
          error: "Make sure the <tag>div</tag> still exists!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "You need to add a <tag>h1</tag> in the div!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return checkElementText(h1, "John Doe");
          },
          error: "Change the content of the <tag>h1</tag> to John Doe!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const div = frame.querySelector("div");
            return isElementChildOf(h1, div);
          },
          error: "Your <tag>h1</tag> needs to be in the <tag>div</tag>!",
        },
      ],
      instruction: 'Add an <tag>h1</tag> tag with the content of "John Doe"',
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            return div.length > 1;
          },
          error: "You need 2 <tag>div</tag>!",
        },
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            return isElementChildOf(div[1], frame);
          },
          error: "Add a <tag>div</tag> inside the second <tag>div</tag>!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const div = frame.querySelectorAll("div");
            return isElementChildOf(h1, div[0]);
          },
          error: "Don't delete the <tag>h1</tag> in the previous step!",
        },
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");

            return isElementChildOf(div[1], div[0]);
          },
          error:
            "Make sure the second <tag>div</tag> is inside the initial one",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const div = frame.querySelectorAll("div");

            return areElementsInOrder([h1, div[1]], div[0]);
          },
          error: "Make sure the <tag>div</tag> is below the <tag>h1</tag>",
        },
      ],
      instruction:
        "Add a <tag>div</tag> inside our current <tag>div</tag> below the <tag>h1</tag>",
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
