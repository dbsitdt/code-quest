import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Advanced Selection 1",
  category: "CSS Selectors",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode: `<section>
  <h1 class='title'>Jane Doe</h1>
  <p>Professional Full-stack Web Developer</p>
</section>
<div>
  <h1>About me</h1>
  <div>
    <p>I am an intellectual with 10+ years of experience working in the industry.</p>
    <p>I spend my time writing code that benefits society in a meaningful way 
    such as connecting students all over the world with my mentor-seeking app.</p>
  </div>
</div>
<section>
  <p class='title'>Footer</p>
  <input placeholder="age" type="number"></input>
  <input placeholder="name" type="text"></input>
  <input placeholder="password" type="password"></input>
</section>`,
    cssCode: `body {
  margin: 0;
}
section, div {
  font-family: Sans-serif;
  color: white;
  margin: 0;
  padding-block: 16px; /* sets padding top and bottom */
}
section {
  background: #9999ff;
  padding-block: 50px; 
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
            const corH1 = frame.querySelector("section h1.title");
            const badH1 = frame.querySelector("div h1");
            const foot = frame.querySelector("section p.title");

            return corH1 && foot && badH1;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const badH1 = frame.querySelector("div h1");
            const foot = frame.querySelector("section p.title");
            return (
              !checkElementProperty(badH1, "font-size", "48px") &&
              !checkElementProperty(foot, "font-size", "48px")
            );
          },
          error:
            "Don't affect the font-size of the h1 in the div or the title in footer",
        },
        {
          testFunc: (frame) => {
            const corH1 = frame.querySelector("section h1.title");

            return checkElementProperty(corH1, "font-size", "48px");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>h1</tag> tag with the text <tag>Jane Doe</tag> to have a <tag>font-size</tag> of <tag>3rem</tag> without affecting the h1 in the div or the title in footer",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const corH1 = frame.querySelector("section h1.title");
            const ps = frame.querySelectorAll("section p");
            const dp = frame.querySelectorAll("div p");
            return corH1 && ps?.length > 0 && dp?.length > 0;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const dp = Array.from(frame.querySelectorAll("div p"));
            return !dp.some((el) => {
              console.log(el.style);
              return checkElementProperty(
                el,
                "textDecorationLine",
                "underline"
              );
            });
          },
          error: "Make sure the paragraphs in the div are not affected",
        },
        {
          testFunc: (frame) => {
            const ps = Array.from(frame.querySelectorAll("section p"));
            return ps.every((el) =>
              checkElementProperty(el, "textDecorationLine", "underline")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set all the <tag>text-decoration</tag> for paragraph tags in <tag>section</tag> to be <tag>underline</tag> without affecting the paragraphs in the <tag>divs</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const inputs = frame.querySelectorAll("input");
            const pwdInput = frame.querySelector('input[type="password"]');
            return inputs.length === 3 && pwdInput;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const numInput = frame.querySelector('input[type="number"]');
            const nameInput = frame.querySelector('input[type="text"]');

            return (
              !checkElementProperty(nameInput, "color", "rgb(165, 42, 42)") &&
              !checkElementProperty(numInput, "color", "rgb(165, 42, 42)")
            );
          },
          error:
            "Do not affect the inputs that are not mentioned in the instructions.",
        },
        {
          testFunc: (frame) => {
            const pwdInput = frame.querySelector('input[type="password"]');
            return checkElementProperty(pwdInput, "color", "rgb(165, 42, 42)");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction: `Set the color of the <tag>input</tag> with <tag>type</tag> of <tag>password</tag> to "brown"`,
    },
  ],
};
