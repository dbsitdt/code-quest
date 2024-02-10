import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Changing colors",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode: "<h1>Hi!</h1>",
    cssCode: "",
  },
  description:
    "As your first step into CSS, you will learn how to use CSS to change the color of text.",
  links: [
    {
      name: "MDN CSS syntax",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax",
    },
    {
      name: "MDN color property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
    },
  ],
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("h1");
          },
          error: "Where did the h1 go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return checkElementProperty(h1, "color", "rgb(255, 0, 0)");
          },
          error:
            "You haven't changed the color of the h1 yet! You can just select an element with its name.",
        },
      ],
      instruction:
        "Change the <tag>color</tag> of the <tag>h1</tag> to <tag>red</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("h1");
          },
          error: "Where did the h1 go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return checkElementProperty(
              h1,
              "backgroundColor",
              "rgb(255, 165, 0)"
            );
          },
          error:
            "You haven't changed the background color of the h1 yet! Remember to change it with background-color.",
        },
      ],
      instruction:
        "Change the background color of the <tag>h1</tag> to <tag>orange</tag>.",
    },
  ],
};
