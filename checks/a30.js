import { checkElementProperty, getElementProperty } from "../utils/domHelpers";
export default {
  title: "Flexbox: Basic Navigation bar",
  category: "CSS layout",
  disabled: { html: true, css: false },
  lastInCat: true,
  description:
    "A navigation bar, nav for short, is a common component of most modern websites. Let's learn how to create one in flexbox.",
  links: [
    {
      name: "MDN Flexbox",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
    },
  ],
  defaultCode: {
    htmlCode: `<nav>
  <img class="logo" src="https://placehold.co/100x80" />
  <ul class="nav-links">
    <li>Home</li>
    <li>About us</li>
    <li>Projects</li>
    <li>Contact</li>
  </ul>
</nav>
`,
    cssCode: `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
nav {
  padding: 1rem 2rem;
  background: #F3F3F3; 
}
`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            const navLinks = frame.querySelector(".nav-links");
            return !!navLinks && !!nav;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const navLinks = frame.querySelector(".nav-links");
            return checkElementProperty(navLinks, "list-style-type", "none");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: "Remove the bullet points on <tag>.nav-links</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            const navLinks = frame.querySelector(".nav-links");
            return !!navLinks && !!nav;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            return checkElementProperty(nav, "display", "flex");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction: "Apply flexbox onto <tag>nav</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            const navLinks = frame.querySelector(".nav-links");
            return !!navLinks && !!nav;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            return checkElementProperty(nav, "display", "flex");
          },
          error: "Make sure <tag>nav</tag> still is a flex container.",
        },
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            return checkElementProperty(
              nav,
              "justify-content",
              "space-between"
            );
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Maxinize the horizontal distance between the <tag>.logo</tag> and <tag>.nav-links</tag>",
    },

    {
      tests: [
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            const navLinks = frame.querySelector(".nav-links");
            return !!navLinks && !!nav;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const navLinks = frame.querySelector(".nav-links");
            return checkElementProperty(navLinks, "display", "flex");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Make the <tag>li</tag> horizontally placed in <tag>.nav-links</tag>",
    },

    {
      tests: [
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            const navLinks = frame.querySelector(".nav-links");
            return !!navLinks && !!nav;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const navLinks = frame.querySelector(".nav-links");
            return checkElementProperty(navLinks, "display", "flex");
          },
          error: "Make sure <tag>.nav-links</tag> is still a flex container",
        },
        {
          testFunc: (frame) => {
            const navLinks = frame.querySelector(".nav-links");
            return checkElementProperty(navLinks, "gap", "16px");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Add a gap of 1rem between each <tag>li</tag> in <tag>.nav-link</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            const navLinks = frame.querySelector(".nav-links");
            return !!navLinks && !!nav;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            return checkElementProperty(nav, "display", "flex");
          },
          error: "Make sure <tag>nav</tag> still is a flex container.",
        },
        {
          testFunc: (frame) => {
            const nav = frame.querySelector("nav");
            return checkElementProperty(nav, "align-items", "center");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Align <tag>.logo</tag> and the <tag>.nav-link</tag> vertically in the <tag>nav</tag>",
    },
  ],
};
