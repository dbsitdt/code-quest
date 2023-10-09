import {
  areElementsInOrder,
  checkElementText,
  isElementChildOf,
} from "../helpers/domHelpers";
export default {
  title: "Adding tags",
  category: "Basic HTML",
  defaultCode: {
    htmlCode:
      "<!--Remember to open the tag with <[tag-name]> and close the tag with </[tag-name]>]\nAlso don't delete code from previous steps!-->",
    cssCode: "",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error:
            "Where is the <tag>h1</tag>?? Add an h1 with the <tag>h1</tag> tags",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return checkElementText(h1, "This is a h1");
          },
          error: "You haven't changed the content yet!",
        },
      ],
      instruction:
        'Add an <tag>h1</tag> tag with the content of "This is a h1"',
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error:
            "Where did the <tag>h1</tag> go??? Don't delete your previous code!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return checkElementText(h1, "This is a h1");
          },
          error: "Don't change your previous code!",
        },
        {
          testFunc: (frame) => {
            const h2 = frame.querySelector("h2");
            return isElementChildOf(h2, frame);
          },
          error: "You haven't added an <tag>h2</tag> yet!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const h2 = frame.querySelector("h2");
            return areElementsInOrder([h1, h2], frame);
          },
          error: "The <tag>h2</tag> isn't directly under <tag>h1</tag>!",
        },
        {
          testFunc: (frame) => {
            const h2 = frame.querySelector("h2");
            return checkElementText(h2, "This is a h2");
          },
          error: "The content in the <tag>h2</tag> seems to be wrong :/",
        },
      ],
      instruction:
        'Now add a <tag>h2</tag> tag below the <tag>h1</tag> tag with the content of "This is a h2"',
    },
  ],
};
