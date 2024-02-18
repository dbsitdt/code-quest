import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Position fixed",
  category: "CSS layout",
  disabled: { html: true, css: false },
  description:
    "Position fixed is similar to position absolute, but it's fixed on the screen. We now build a simple pop up to see how we can use them.",
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
    htmlCode: `<div class="popup">
  <p>You've won an qPhone 15 Pro Max Ultra Light!</p>
  <button>Redeem now</button>
</div>
<section>
  <h2 id='hero-title'>Jane Doe</h2>
  <p>Professional Full-stack Web Developer</p>
</section>
<div class="container">
  <h2 id='about-title'>About me</h2>
  <div class="text-container">
    <p>I am an intellectual with 10+ years of experience working in the industry.</p>
      <p>I spend my time writing code that benefits society in a meaningful way such as connecting students all over the world with my mentor-seeking app.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img src="https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg"/>
  </div>
</div>
`,
    cssCode: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  background: #000033;
}
h2 {
  font-size: 3.5rem;
}
section {
   background: #9999ff;
}
section, div.container {
  font-family: Sans-serif;
  color: white;
  margin: 0;
  padding-block: 16px;
  padding-left: 2rem;
}
div.container {
  background: #000033;
}
.text-container {
  width: 700px;
}
.text-container img {
  height: 500px;
}
.text-container p {
  margin-block: 1rem;
}
.popup {
  background: #e1dfe6;
}`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return !!popup;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return checkElementProperty(popup, "width", "300px");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>width</tag> of <tag>.popup</tag> to <tag>300px</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return !!popup;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return (
              checkElementProperty(popup, "padding-top", "16px") &&
              checkElementProperty(popup, "padding-left", "16px") &&
              checkElementProperty(popup, "padding-right", "16px") &&
              checkElementProperty(popup, "padding-bottom", "16px")
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>padding</tag> of <tag>.popup</tag> to <tag>1rem</tag> i.e. <tag>16px</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return !!popup;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return checkElementProperty(popup, "position", "fixed");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>position</tag> prpoerty of <tag>.popup</tag> to <tag>fixed</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return !!popup;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return checkElementProperty(popup, "position", "fixed");
          },
          error:
            "Make sure the popup has <tag>position</tag> set to <tag>fixed</tag>.",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return checkElementProperty(popup, "bottom", "0px");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: "Position the popup to be at the bottom of the viewport.",
    },
  ],
};
