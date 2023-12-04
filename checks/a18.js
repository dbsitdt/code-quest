import { checkElementProperty, isElementChildOf } from "../helpers/domHelpers";
export default {
  title: "Classes",
  category: "CSS Selectors",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<div class='box red'></div>\n<section class='box blue'></section>\n<div class='box green'></div>",
    cssCode: ``,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const red = frame.querySelector("div.box.red");
            const blue = frame.querySelector("section.box.blue");
            const green = frame.querySelector("div.box.green");

            return red && blue && green;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const box = frame.querySelectorAll(".box");
            return Array.from(box).every(
              (el) =>
                checkElementProperty(el, "width", "100px") &&
                checkElementProperty(el, "height", "100px")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>width</tag> and <tag>height</tag> of all <tag>box</tag>to <tag>100px</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const red = frame.querySelector(".box.red");
            const blue = frame.querySelector(".box.blue");
            const green = frame.querySelector(".box.green");

            return red && blue && green;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const box = frame.querySelector(".box.red");
            return checkElementProperty(
              box,
              "background-color",
              "rgb(255, 0, 0)"
            );
          },
          error: "Change the background color of the red box to <tag>red</tag>",
        },
        {
          testFunc: (frame) => {
            const box = frame.querySelector(".box.blue");
            return checkElementProperty(
              box,
              "background-color",
              "rgb(0, 0, 255)"
            );
          },
          error:
            "Change the background color of the blue box to <tag>blue</tag>",
        },
        {
          testFunc: (frame) => {
            const box = frame.querySelector(".box.green");
            return checkElementProperty(
              box,
              "background-color",
              "rgb(0, 128, 0)"
            );
          },
          error:
            "Change the background color of the green box to <tag>green</tag>",
        },
      ],
      instruction:
        "Set the <tag>background color</tag> of the boxes to match their classes",
    },
  ],
};
