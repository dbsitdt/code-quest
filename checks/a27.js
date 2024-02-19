import { checkElementProperty, getElementProperty } from "../utils/domHelpers";
export default {
  title: "Layering with z-index",
  category: "CSS layout",
  disabled: { html: true, css: false },
  lastInCat: true,

  description:
    "z-index is a useful property that allows us to layer elements atop of each other in acontrolled manner.",
  links: [
    {
      name: "MDN understanding z-index",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index",
    },
  ],
  defaultCode: {
    htmlCode: `
<div class="popup">
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
<div class="overlay"></div>
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
  width: 300px;
  padding: 1rem;
  position: fixed;
  bottom: 0;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            const overlay = frame.querySelector(".overlay");

            return !!popup && !!overlay;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const overlay = frame.querySelector(".overlay");
            return checkElementProperty(overlay, "position", "fixed");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>position</tag> prpoerty of <tag>.overlay</tag> to <tag>fixed</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            const overlay = frame.querySelector(".overlay");

            return !!popup && !!overlay;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const overlay = frame.querySelector(".overlay");
            return checkElementProperty(overlay, "position", "fixed");
          },
          error:
            "Make sure <tag>.overlay</tag> has its <tag>position</tag> set to <tag>fixed</tag>.",
        },
        {
          testFunc: (frame) => {
            const overlay = frame.querySelector(".overlay");
            return (
              checkElementProperty(overlay, "top", "0px") &&
              checkElementProperty(overlay, "left", "0px")
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Position <tag>.overlay</tag> to be at the top left of the screen.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            const overlay = frame.querySelector(".overlay");

            return !!popup && !!overlay;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            return checkElementProperty(popup, "position", "fixed");
          },
          error:
            "Make sure <tag>.popup</tag> has its <tag>position</tag> set to <tag>fixed</tag>.",
        },
        {
          testFunc: (frame) => {
            const overlay = frame.querySelector(".overlay");
            return checkElementProperty(overlay, "position", "fixed");
          },
          error:
            "Make sure <tag>.overlay</tag> has its <tag>position</tag> set to <tag>fixed</tag>.",
        },
        {
          testFunc: (frame) => {
            const popup = frame.querySelector(".popup");
            const overlay = frame.querySelector(".overlay");
            return (
              Number(getElementProperty(popup, "z-index")) >
              Number(getElementProperty(overlay, "z-index"))
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Use <tag>z-index</tag> to move the popup to above the overlay in terms of layers.",
    },
  ],
};
