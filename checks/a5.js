import {
  checkElementAttribute,
  checkElementText,
  isElementChildOf,
} from "../helpers/domHelpers";
export default {
  title: "Using anchor tags for links",
  category: "Basic HTML",
  defaultCode: {
    htmlCode: "<p>Click here for RICKROLL!</p>",
    cssCode: "/* Nothing to see here :) */",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            return isElementChildOf(p, frame);
          },
          error: "Where did the initial paragraph go??",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            return checkElementText(p, "Click here for RICKROLL!");
          },
          error: "Don't change the text of the paragraph!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            const a = frame.querySelector("a");
            return isElementChildOf(a, p);
          },
          error: "Make sure you've added an anchor tag in the paragraph",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementText(a, "here");
          },
          error: "Make sure the anchor tag is around 'here'",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementAttribute(
              a,
              "href",
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            );
          },
          error: "Make sure the anchor tag points to the youtube link!",
        },
      ],

      instruction:
        "Add an anchor tag with href to https://www.youtube.com/watch?v=dQw4w9WgXcQ around the text of 'here'",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            return isElementChildOf(p, frame);
          },
          error: "Where did the initial paragraph go??",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            const a = frame.querySelector("a");
            return isElementChildOf(a, p);
          },
          error: "Make sure you've added an anchor tag in the paragraph",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementText(a, "here");
          },
          error: "Make sure the anchor tag is around 'here'",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementAttribute(
              a,
              "href",
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            );
          },
          error: "Make sure the anchor tag still points to the youtube link!",
        },
        {
          testFunc: (frame) => {
            const a = frame.querySelector("a");
            return checkElementAttribute(a, "target", "_blank");
          },
          error:
            "Make sure the anchor tag has its target attribute set to '_blank'!",
        },
      ],
      instruction:
        "Add an attribute of 'target' and set it to '_blank' on the anchor tag to open another window when opening the link",
    },
  ],
};
