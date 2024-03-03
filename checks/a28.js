import { checkElementProperty, getElementProperty } from "../utils/domHelpers";
export default {
  title: "Display Flex",
  category: "CSS layout",
  disabled: { html: true, css: false },
  description:
    "CSS flexbox is one of the many powerful tools that you can use to layout the various elements on your website.",
  links: [
    {
      name: "MDN Flexbox",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
    },
  ],
  defaultCode: {
    htmlCode: `
<div class="container">
  <div class="card card-1">
    <h3>Article</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Et netus et malesuada fames ac turpis.
    </p>
  </div>
  <div class="card card-2">
    <h3>Article</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Et netus et malesuada fames ac turpis.
    </p>
  </div>
  <div class="card card-3">
    <h3>Article</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Et netus et malesuada fames ac turpis.
    </p>
  </div>
</div>
`,
    cssCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card {
  padding: 1rem;
}
.card-1 {
  background: #ffb5b0;
}
.card-2 {
  background: #c5ffb0;
}
.card-3 {
  background: #b0c1ff;
}
`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return !!container;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "display", "flex");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        "Set the <tag>display</tag> property of <tag>.container</tag> to <tag>flex</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return !!container;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "display", "flex");
          },
          error: "Make sure <tag>.card</tag> still has display set to flex.",
        },
        {
          testFunc: (frame) => {
            const container = frame.querySelector(".container");
            return checkElementProperty(container, "row-gap", "16px");
          },
          error: "Follow the instructions",
        },
      ],
      instruction:
        'Create a gap of 1rem between each <tag>.card</tag> using a "flex-property".',
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const card = frame.querySelectorAll(".card");
            return card.length === 3;
          },
          error: "Don't touch the html!",
        },

        {
          testFunc: (frame) => {
            const card = frame.querySelector(".card");
            return checkElementProperty(card, "display", "flex");
          },
          error:
            "Set <tag>display</tag> of each <tag>.card</tag> to <tag>flex</tag>",
        },
        {
          testFunc: (frame) => {
            const card = frame.querySelector(".card");
            return checkElementProperty(card, "flex-direction", "column");
          },
          error: "Make sure the h3 and p are vertically placed.",
        },
      ],
      instruction:
        "Apply flex box onto each <tag>.card</tag> while keeping the <tag>h3</tag> and <tag>p</tag> vertically placed.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const card = frame.querySelectorAll(".card");
            return card.length === 3;
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const card = frame.querySelector(".card");
            return (
              checkElementProperty(card, "display", "flex") &&
              checkElementProperty(card, "flex-direction", "column")
            );
          },
          error:
            "Make sure the <tag>.article</tag> still is a flex container and is vertical.",
        },

        {
          testFunc: (frame) => {
            const card = frame.querySelector(".card");
            return checkElementProperty(card, "column-gap", "10px");
          },
          error: "Follow the instructions.",
        },
      ],
      instruction:
        'Create a gap of 10px between the <tag>h3</tag> and <tag>p</tag> using a "flex-property".',
    },
  ],
};
