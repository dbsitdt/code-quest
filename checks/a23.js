import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Transform: Scale and Skew",
  category: "CSS layout",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode: `<div class="badge">\n  <img src="https://www.dbs.edu.hk/dbslogoF-B.png" />\n</div>`,
    cssCode: `.badge {
  background: SlateBlue;
  width: 100px;
  height: 100px;
  margin-left: 50%;
  margin-top: 10%;
  padding: 1rem;
}
img {
  width: inherit;
}`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return badge;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(
              badge,
              "transform",
              "matrix(2, 0, 0, 1, 0, 0)"
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: "Scale the box <tag>2 times</tag> along its x-axis",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return !!badge;
          },
          error: "Don't touch the html!",
        },

        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(
              badge,
              "transform",
              "matrix(2, 0, 0, 2.5, 0, 0)"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Scale the box <tag>2.5 times</tag> along its y-axis without changing other transform properties and keeping the translate from last step.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return !!badge;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(
              badge,
              "transform",
              "matrix(2, 0.669873, 0.535898, 2.5, 0, 0)"
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: `Skew the badge by <tag>15deg</tag> in both axes without changing other transform properties and keeping the translate from last step.`,
    },
  ],
};
