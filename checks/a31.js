import { checkElementProperty, getElementProperty } from "../utils/domHelpers";
export default {
  title: "Flex and Order",
  category: "CSS layout",
  disabled: { html: true, css: false },
  lastInCat: true,
  description:
    "The last 2 flex properties we look at is flex and order. They are useful for responsive designs later on.",
  links: [
    {
      name: "MDN Flexbox",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
    },
    {
      name: "MDN flex property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
    },
    {
      name: "MDN order property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
    },
  ],
  defaultCode: {
    htmlCode: `<div class="container">
  <div class="box red">Box 1</div>
  <div class="box green">Box 2</div>
  <div class="box blue">Box 3</div>
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
            const red = frame.querySelector(".red");
            return getElementProperty(red, "flex-grow") > 0;
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Expand Box 1 to take up the maximum width in the viewport, while keeping the other <tag>.box</tag> their original width using <tag>flex</tag>.",
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
            const red = frame.querySelector(".red");
            return getElementProperty(red, "flex-grow") > 0;
          },
          error:
            "Make sure <tag>.red</tag> is still taking up the maximum it can in the viewport.",
        },
        {
          testFunc: (frame) => {
            const green = frame.querySelector(".green");
            const red = frame.querySelector(".red");

            return (
              getElementProperty(red, "flex-grow") ===
              getElementProperty(green, "flex-grow")
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Expand Box 2 to take up the same width as Box 1, making Box 2 span half of the space in the viewport left over from Box 3's width.",
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
            const red = frame.querySelector(".red");
            const green = frame.querySelector(".green");
            const blue = frame.querySelector(".blue");
            return (
              checkElementProperty(green, "order", "1") &&
              checkElementProperty(red, "order", "2") &&
              checkElementProperty(blue, "order", "3")
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Using <tag>order</tag>, make the order of the boxes as so: <tag>Box 2, Box 1, Box 3</tag>",
    },
  ],
};
