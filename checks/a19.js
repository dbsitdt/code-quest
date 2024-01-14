import { checkElementProperty, isElementChildOf } from "../utils/domHelpers";
export default {
  title: "ID",
  category: "CSS Selectors",
  disabled: { html: false, css: false },
  lastInCat: true,
  defaultCode: {
    htmlCode: `<section>
  <h2 id='hero-title'>Jane Doe</h2>
  <p>Professional Full-stack Web Developer</p>
</section>
<div>
  <h2 id='about-title'>About me</h2>
  <div>
    <p>I am an intellectual with 10+ years of experience working in the industry.</p>
    <p>I spend my time writing code that benefits society in a meaningful way 
    such as connecting students all over the world with my mentor-seeking app.</p>
  </div>
</div>`,
    cssCode: `body {
  margin: 0;
  background: #000033;
}
section, div {
  font-family: Sans-serif;
  background: #9999ff;
  color: white;
  margin: 0;
  padding-block: 16px; /* sets padding top and bottom */
}
div {
  background: #000033;
}`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("section #hero-title");
            const thing2 = frame.querySelector("div #about-title");
            const innerThing = frame.querySelector("div > div");
            return thing && thing2 && innerThing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const title = frame.querySelector("h2#hero-title");
            return checkElementProperty(title, "font-size", "56px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>h2</tag> with id <tag>hero-title</tag>'s <tag>font-size</tag> to <tag>3.5rem</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("section #hero-title");
            const thing2 = frame.querySelector("div #about-title");
            const innerThing = frame.querySelector("div > div");
            return thing && thing2 && innerThing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const title = frame.querySelector("h2#about-title");
            return checkElementProperty(title, "font-size", "32px");
          },
          error: "Follow the instructions!",
        },
        {
          testFunc: (frame) => {
            const title = frame.querySelector("h2#hero-title");
            return checkElementProperty(title, "font-size", "56px");
          },
          error: "Remember, the font size of hero-title should not be changed.",
        },
      ],
      instruction:
        "Set the <tag>h2</tag> with id <tag>about-title</tag>'s <tag>font-size</tag> to <tag>2rem</tag> without affecting <tag>hero-title</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const thing = frame.querySelector("section #hero-title");
            const thing2 = frame.querySelector("div #about-title");
            const innerThing = frame.querySelector("div > div");
            return thing && thing2 && innerThing;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const heroSection = frame.querySelector(
              "section:has(h2#hero-title)"
            );

            return checkElementProperty(heroSection, "padding-left", "32px");
          },
          error: "Change the hero section's padding-left!",
        },
        {
          testFunc: (frame) => {
            const aboutSection = frame.querySelector("div:has(h2#about-title)");
            return checkElementProperty(aboutSection, "padding-left", "32px");
          },
          error: "Change the about div's padding-left!",
        },
        {
          testFunc: (frame) => {
            const innerDiv = frame.querySelector("div > div");
            return !checkElementProperty(innerDiv, "padding-left", "32px");
          },
          error:
            "Make sure you don't affect divs other than the outermost one.",
        },
      ],
      instruction:
        "Set the global(outermost) div and the section's <tag>padding-left</tag> to be 2rem by adding classes",
    },
  ],
};
