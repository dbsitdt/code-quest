import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Position absolute",
  category: "CSS layout",
  disabled: { html: true, css: false },
  lastInCat: true,

  description:
    "Another positioning method is absolute. It is special and less intuitive than position relative so be sure to read the useful links.",
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
    htmlCode: `<section>
  <div class="box">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \nlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \nin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <div class="badge">\n      <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg" />\n    </div>
  </div>
</section>
`,
    cssCode: `body {
  background: #2A2D32;
}
.box {
  background: salmon;
  padding: 1rem;
  width: 50vw;
}
.badge {
  background: SlateBlue;
  width: 100px;
  height: 100px;
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
            return checkElementProperty(badge, "position", "absolute");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>position</tag> property of <tag>.badge</tag> to <tag>absolute</tag>.",
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
            return checkElementProperty(badge, "position", "absolute");
          },
          error:
            "Make sure <tag>.badge</tag> still has <tag>position</tag> set to <tag>absolute</tag>.",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(badge, "right", "0px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Position the badge to be sticking to the right border of the viewport.",
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
            return checkElementProperty(badge, "position", "absolute");
          },
          error:
            "Make sure <tag>.badge</tag> still has <tag>position</tag> set to <tag>absolute</tag>.",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(badge, "right", "0px");
          },
          error: "Keep the badge sticking to the right border of the viewport.",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".badge");
            return checkElementProperty(badge, "bottom", "0px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Position the badge to be sticking to the bottom border of the viewport, so that it is at the bottom right corner.",
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
            return checkElementProperty(badge, "position", "absolute");
          },
          error:
            "Make sure <tag>.badge</tag> still has <tag>position</tag> set to <tag>absolute</tag>.",
        },
        {
          testFunc: (frame) => {
            const badge = frame.querySelector(".box");
            return checkElementProperty(badge, "position", "relative");
          },
          error: "Keep the badge sticking to the bottom right.",
        },
      ],
      instruction:
        "Position the badge to be sticking to the bottom border of <tag>.box</tag>. Hint: Set the <tag>position</tag> property on another element.",
    },
  ],
};
