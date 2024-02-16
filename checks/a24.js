import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Position relative",
  category: "CSS layout",
  disabled: { html: true, css: false },
  description:
    "Another way to move elements is using the posiiton property. There are many usecases for position so let's first delve into relative, the simplest one first.",
  links: [
    {
      name: "MDN positioning guide",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",
    },
    {
      name: "MDN position property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position",
    },
  ],
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
            return checkElementProperty(badge, "position", "relative");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>position</tag> property of <tag>.badge</tag> to <tag>relative</tag>.",
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
            return checkElementProperty(badge, "position", "relative");
          },
          error:
            "Make sure <tag>.badge</tag> still has <tag>position</tag> set to <tag>relative</tag>.",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(badge, "right", "50px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Move the <tag>.badge</tag> <tag>50px</tag> left using positioning.",
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
            return checkElementProperty(badge, "position", "relative");
          },
          error:
            "Make sure <tag>.badge</tag> still has <tag>position</tag> set to <tag>relative</tag>.",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(badge, "bottom", "50px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Move the <tag>.badge</tag> <tag>50px</tag> upwards using positioning.",
    },
  ],
};
