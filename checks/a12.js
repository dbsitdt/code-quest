import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Changing default styling",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<a href='https://dbsitdt.netlify.app' target='_blank'>ITDT Website</a>",
    cssCode: "",
  },
  description:
    "Default HTML elements have default styling. We can now use CSS to change it up and make things pretty.",
  links: [
    {
      name: "MDN background-color property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
    },
    {
      name: "MDN cursor property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
    },
  ],
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("a");
          },
          error: "Where did the anchor go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementProperty(a, "color", "rgb(250, 128, 114)");
          },
          error:
            "You haven't changed the color of the a yet! You can just select an element with its name.",
        },
      ],
      instruction:
        "Change the <tag>color</tag> of the <tag>a</tag> to <tag>salmon</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("a");
          },
          error: "Where did the a go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementProperty(a, "text-decoration-line", "none");
          },
          error:
            "You haven't removed the text decoration of the anchor yet! Remember to change it with text-decoration.",
        },
      ],
      instruction:
        "Remove the text decoration (underline) of the <tag>a</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("a");
          },
          error: "Where did the a go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementProperty(a, "cursor", "wait");
          },
          error: "You haven't changed the cursor of the anchor yet!",
        },
      ],
      instruction:
        "Change the <tag>cursor</tag> of the <tag>a</tag> to <tag>wait</tag>.",
    },
  ],
};
