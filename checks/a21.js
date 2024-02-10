import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Advanced Selection 2",
  category: "CSS Selectors",
  disabled: { html: true, css: false },
  lastInCat: true,
  description:
    "Sometimes we need to select elements very precisely in various sections. Let's see how we can do that.",
  links: [
    {
      name: "W3Schools CSS selectors",
      url: "https://www.w3schools.com/cssref/css_selectors.php",
    },
    {
      name: "MDN nth-of-type pseudo selector",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type",
    },
    {
      name: "MDN not pseudo selector",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:not",
    },
  ],
  defaultCode: {
    htmlCode: `<div>
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box square">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
  <div class="box">9</div>
  <div class="box">10</div>
</div>`,
    cssCode: `.box {
  width: 200px;
  height: 200px;
  background: SlateBlue;
  margin: 1rem;
}`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const boxes = frame.querySelectorAll(".box");
            const squared = frame.querySelector(".square");
            return boxes?.length === 10 && squared;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const squared = frame.querySelector(".square");
            console.log(squared.style.borderRadius);
            return !checkElementProperty(
              squared,
              "borderBottomLeftRadius",
              "25px"
            );
          },
          error:
            "Make sure the box with <tag>.square</tag> does not have its border-radius changed",
        },
        {
          testFunc: (frame) => {
            const roundBoxes = Array.from(
              frame.querySelectorAll(".box:not(.square)")
            );
            return roundBoxes.every((el) =>
              checkElementProperty(el, "borderRadius", "25px")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>border-radius</tag> of the <tag>.box</tag> without the <tag>.square</tag> to be <tag>25px</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const boxes = frame.querySelectorAll(".box");
            const squared = frame.querySelector(".square");
            return boxes?.length === 10 && squared;
          },
          error: "Don't touch the html!",
        },

        {
          testFunc: (frame) => {
            const box1 = frame.querySelector(".box:nth-of-type(1)");
            const box3 = frame.querySelector(".box:nth-of-type(3)");
            return (
              !checkElementProperty(
                box1,
                "backgroundColor",
                "rgb(250, 128, 114)"
              ) &&
              !checkElementProperty(
                box3,
                "backgroundColor",
                "rgb(250, 128, 114)"
              )
            );
          },
          error: "Make sure the other boxes are not affected",
        },
        {
          testFunc: (frame) => {
            const box2 = frame.querySelector(".box:nth-of-type(2)");
            return checkElementProperty(
              box2,
              "backgroundColor",
              "rgb(250, 128, 114)"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the 2nd <tag>.box</tag> to have a <tag>background-color</tag> of <tag>salmon</tag> without affecting the others",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const boxes = frame.querySelectorAll(".box");
            const squared = frame.querySelector(".square");
            return boxes?.length === 10 && squared;
          },
          error: "Don't touch the html!",
        },

        {
          testFunc: (frame) => {
            const boxes = Array.from(
              frame.querySelectorAll(".box:nth-of-type(odd)")
            );

            return !boxes.some((el) =>
              checkElementProperty(el, "backgroundColor", "rgb(255, 99, 71)")
            );
          },
          error: "Make sure the odd numbered boxes are not affected",
        },
        {
          testFunc: (frame) => {
            const boxes = Array.from(
              frame.querySelectorAll(".box:nth-of-type(even)")
            );

            return boxes.every((el) =>
              checkElementProperty(el, "backgroundColor", "rgb(255, 99, 71)")
            );
          },
          error: "Make sure the odd numbered boxes are not affected",
        },
      ],
      instruction: `Set the even numbered boxes to have a background-color of "tomato"`,
    },
  ],
};
