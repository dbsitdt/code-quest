import { checkElementProperty, isElementChildOf } from "../helpers/domHelpers";
export default {
  title: "Text font styles",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<div>\n  <img src='https://placehold.co/80'/>\n  <h2>Toby</h2>\n  <p>'I love the hardware stream'</p>\n</div>",
    cssCode:
      "div {\n  background: dodgerBlue;\n  padding: 1rem;\n  width: 300px;\n}",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("div:has(h2 + p)");
            console.log(thing);
            return thing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const para = frame.querySelector("p");
            const heading = frame.querySelector("h2");

            return (
              checkElementProperty(para, "color", "rgb(255, 255, 255)") &&
              checkElementProperty(heading, "color", "rgb(255, 255, 255)")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>color</tag> of all the text in the <tag>div</tag> to <tag>white</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("div:has(h2 + p)");

            return thing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const para = frame.querySelector("p");
            const heading = frame.querySelector("h2");

            return (
              checkElementProperty(para, "font-family", "Helvetica") &&
              checkElementProperty(heading, "font-family", "Helvetica")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>font-family</tag> of all the text in the <tag>div</tag> to <tag>Helvetica</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("div:has(h2 + p)");

            return thing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const para = frame.querySelector("p");

            return !checkElementProperty(para, "font-size", "50px");
          },
          error: "Don't change the font size of the paragraph!",
        },
        {
          testFunc: (frame) => {
            const h2 = frame.querySelector("h2");

            return checkElementProperty(h2, "font-size", "50px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>font-size</tag> of the h2 to <tag>50px</tag> without changing the <tag>p</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("div:has(h2 + p)");

            return thing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const h2 = frame.querySelector("h2");

            return !checkElementProperty(h2, "font-style", "italic");
          },
          error: "Don't change the font size of the h2!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");

            return checkElementProperty(p, "font-style", "italic");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>font-style</tag> of the <tag>p</tag> to <tag>italic</tag> without changing the <tag>h2</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("div:has(h2 + p)");

            return thing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return checkElementProperty(img, "border-radius", "30px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>border-radius</tag> of the <tag>img</tag> to <tag>30px</tag>",
    },
  ],
};
