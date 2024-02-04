import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Transform: Translate and Rotate",
  category: "CSS layout",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode: `<div class="box">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \nin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
<div class="badge">\n  <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg" />\n</div>`,
    cssCode: `.box {
  width: 500px;
  height: 300px;
  background: #717485;
}
.badge {
  background: SlateBlue;
  width: 100px;
  height: 100px;
  color: white;
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
            const box = frame.querySelector(".box");
            const badge = frame.querySelector(".badge");
            return !!box || !!badge;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(
              badge,
              "transform",
              "matrix(1, 0, 0, 1, -20, 0)"
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Move the <tag>.badge</tag> <tag>20px</tag> to the left using <tag>translate</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const box = frame.querySelector(".box");
            const badge = frame.querySelector(".badge");
            return !!box && !!badge;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return !checkElementProperty(
              badge,
              "transform",
              "matrix(1, 0, 0, 1, 0, -50)"
            );
          },
          error:
            "Do not remove the transform from the last step or add additional transforms!",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(
              badge,
              "transform",
              "matrix(1, 0, 0, 1, -20, -50)"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Move the <tag>.badge</tag> <tag>50px</tag> upwards using <tag>translate</tag> without changing other transform properties and keeping the translate from last step.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const box = frame.querySelector(".box");
            const badge = frame.querySelector(".badge");
            return !!box && !!badge;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(
              badge,
              "transform",
              "matrix(0.939693, -0.34202, 0.34202, 0.939693, -20, -50)"
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: `Rotate the <tag>.badge</tag> by <tag>20 deg</tag> anti-clockwise using <tag>rotate</tag> without changing other transform properties and keeping the translate from last step.`,
    },
  ],
};
