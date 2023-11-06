import { checkElementProperty } from "../helpers/domHelpers";
export default {
  title: "Padding and Margin",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<div>\n  <h2>Q Sir</h2>\n    <ul>\n      <li>Professional Programmer</li>\n      <li>CTF expert</li>\n      <li>Excellent ICT teacher\n    </li>\n  </ul>\n  <a href='mailto:dbsql@dbs.edu.hk'>Contact him</a>\n</div>\n<div>\n  <h2>Q Sir</h2>\n    <ul>\n      <li>Professional Programmer</li>\n      <li>CTF expert</li>\n      <li>Excellent ICT teacher\n    </li>\n  </ul>\n  <a href='mailto:dbsql@dbs.edu.hk'>Contact him</a>\n</div>",
    cssCode:
      "div {\n  background: lightgray;\n}\n/*Hint: CSS is cascading i.e. styles that you apply later override those before*/",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelectorAll("div:has(h2+ul>li)").length == 2;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const all = Array.from(frame.querySelectorAll("*"));
            return all.every((el) =>
              checkElementProperty(el, "box-sizing", "border-box")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Make all elements have <tag>box-sizing</tag> of <tag>border-box</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelectorAll("div:has(h2+ul>li)").length == 2;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const all = Array.from(frame.querySelectorAll("*"));
            return all.every((el) =>
              checkElementProperty(el, "box-sizing", "border-box")
            );
          },
          error: "Keep the box-sizing setting of all elements.",
        },
        {
          testFunc: (frame) => {
            const all = Array.from(frame.querySelectorAll("*"));
            return all.every(
              (el) =>
                checkElementProperty(el, "padding", "0px") &&
                checkElementProperty(el, "margin", "0px")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Remove the default padding and margin from all elements i.e. set them to 0",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelectorAll("div:has(h2+ul>li)").length == 2;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const all = Array.from(frame.querySelectorAll("*"));
            return all.every((el) =>
              checkElementProperty(el, "box-sizing", "border-box")
            );
          },
          error: "Keep the box-sizing setting of all elements.",
        },
        {
          testFunc: (frame) => {
            const card = Array.from(frame.querySelectorAll("div"));
            return card.every((el) =>
              checkElementProperty(el, "width", "300px")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>width</tag> of the div cards to be <tag>300px</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelectorAll("div:has(h2+ul>li)").length == 2;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const all = Array.from(frame.querySelectorAll("*"));
            return all.every((el) =>
              checkElementProperty(el, "box-sizing", "border-box")
            );
          },
          error: "Keep the box-sizing setting of all elements.",
        },
        {
          testFunc: (frame) => {
            const card = Array.from(frame.querySelectorAll("div"));
            return card.every((el) =>
              checkElementProperty(el, "width", "300px")
            );
          },
          error: "Don't touch the width of the div cards@",
        },
        {
          testFunc: (frame) => {
            const card = Array.from(frame.querySelectorAll("div"));
            return card.every((el) =>
              checkElementProperty(el, "margin", "30px")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Adding <tag>30px</tag> of <tag>margin</tag> to the <tag>div</tag>!",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelectorAll("div:has(h2+ul>li)").length == 2;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const all = Array.from(frame.querySelectorAll("*"));
            return all.every((el) =>
              checkElementProperty(el, "box-sizing", "border-box")
            );
          },
          error: "Keep the box-sizing setting of all elements.",
        },
        {
          testFunc: (frame) => {
            const card = Array.from(frame.querySelectorAll("div"));
            return card.every((el) =>
              checkElementProperty(el, "width", "300px")
            );
          },
          error: "Don't touch the width of the div cards@",
        },
        {
          testFunc: (frame) => {
            const cards = Array.from(frame.querySelectorAll("div"));
            return cards.every((el) =>
              checkElementProperty(el, "margin", "30px")
            );
          },
          error: "Don't change the margin of the cards",
        },
        {
          testFunc: (frame) => {
            const cards = Array.from(frame.querySelectorAll("div"));
            return cards.every((el) =>
              checkElementProperty(el, "padding", "20px")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Adding <tag>20px</tag> of <tag>padding</tag> to the <tag>div</tag>!",
    },
  ],
};
