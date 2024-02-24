import { checkElementProperty, getElementProperty } from "../utils/domHelpers";
export default {
  title: "Justify and Align",
  category: "CSS layout",
  disabled: { html: true, css: false },
  description:
    "We can use justify-content and align-items to align elements on both axes in a flexbox. It is very useful for creating layouts that look good.",
  links: [
    {
      name: "MDN Flexbox",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
    },
  ],
  defaultCode: {
    htmlCode: `<div class="container">
  <div class="box red"></div>
  <div class="box green"></div>
  <div class="box blue"></div>
</div>
`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 100px;
  height: 100px;
}
.red {
  background: #FFB5B0;
}
.green {
  background: #c5ffb0;
}
.blue {
  background: #b0c1ff;
  height: 200px;
}
.container {
  height: 300px;
  background: #F3F3F3;
}
`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return !!container;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "display", "flex");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: "Apply flexbox onto <tag>.container</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return !!container;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "display", "flex");
          },
          error: "Make sure <tag>.container</tag> still is a flex container.",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "justify-content", "center");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        'Move all the <tag>.box</tag> to the center of <tag>.container</tag> using a "flex-property"',
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return !!container;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "display", "flex");
          },
          error: "Make sure <tag>.container</tag> still is a flex container.",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(
              container,
              "justify-content",
              "space-between"
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Maximize the horizontal distance between each <tag>.box</tag> within the viewport using <tag>justify-content</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return !!container;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "display", "flex");
          },
          error: "Make sure <tag>.container</tag> still is a flex container.",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "align-items", "center");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Align all the <tag>.box</tag> vertically to the center of <tag>.container</tag>",
    },
  ],
};
