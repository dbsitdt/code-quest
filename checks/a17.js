import { checkElementProperty, isElementChildOf } from "../utils/domHelpers";
export default {
  title: "Box Shadow",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  lastInCat: true,
  defaultCode: {
    htmlCode:
      "<div>\n  <img src='https://placehold.co/80'/>\n  <h2>Toby</h2>\n  <p>'I love the hardware stream'</p>\n</div>",
    cssCode: `div {
  background: linear-gradient(90deg, rgba(0,88,208,1) 0%, rgba(0,212,255,1) 100%);
  padding: 1rem;
  color: white;
  width: 300px;
  font-family: Helvetica;
}
h2 {
  font-size: 50px;
}
p {
  font-style: italic;
}
img {
  border-radius: 30px;
}`,
  },
  steps: [
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
            const box = frame.querySelector("div");
            return checkElementProperty(
              box,
              "box-shadow",
              "rgb(0, 0, 0) 5px 5px 0px 0px"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>box-shadow</tag> of the <tag>div</tag> to <tag>black</tag>, with offsets of <tag>5px</tag> in both x and y.",
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
            const box = frame.querySelector("div");
            return checkElementProperty(
              box,
              "box-shadow",
              "rgba(0, 0, 0, 0.3) 5px 5px 0px 0px"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>opacity</tag> of the black shadow to be <tag>0.3</tag>",
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
            const box = frame.querySelector("div");
            return checkElementProperty(
              box,
              "box-shadow",
              "rgba(0, 0, 0, 0.3) 5px 5px 5px 0px"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction: "Set the <tag>blur</tag> of the shadow to be <tag>5px</tag>",
    },
  ],
};
