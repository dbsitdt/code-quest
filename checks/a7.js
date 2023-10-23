import {
  checkElementText,
  isElementChildOf,
  areElementsInOrder,
} from "../helpers/domHelpers";
export default {
  title: "Ununordered Lists",
  category: "Basic HTML",
  lastInCat: true,
  disabled: { html: false, css: true },

  defaultCode: {
    htmlCode: "<h1>Shopping List</h1>",
    cssCode: "/* Nothing to see here :) */",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return isElementChildOf(ul, frame);
          },
          error: "Add an unordered list!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const ul = frame.querySelector("ul");
            return areElementsInOrder([h1, ul], frame);
          },
          error: "The unordered list should be under <tag>h1</tag>",
        },
      ],

      instruction: "Add an unordered list under the <tag>h1</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return isElementChildOf(ul, frame);
          },
          error: "Where did the unordered list go???",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const ul = frame.querySelector("ul");
            return areElementsInOrder([h1, ul], frame);
          },
          error: "The unordered list should still be under <tag>h1</tag>",
        },
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            const li = frame.querySelector("li");
            return isElementChildOf(li, ul);
          },
          error: "Now add a list item in the ul with <tag>li</tag>!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            const li = frame.querySelector("li");
            return isElementChildOf(p, li);
          },
          error:
            "You should add a paragraph inside the <tag>li</tag> for the content",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("p");
            return checkElementText(p, "Lettuce");
          },
          error: "Don't forget to change the content of the paragraph!",
        },
      ],
      instruction:
        "Add a list item in the list with a paragraph inside, containing content of 'Lettuce'.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return isElementChildOf(ul, frame);
          },
          error: "Where did the unordered list go???",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const ul = frame.querySelector("ul");
            return areElementsInOrder([h1, ul], frame);
          },
          error: "The unordered list should still be under <tag>h1</tag>",
        },
        {
          testFunc: (frame) => {
            const liList = frame.querySelectorAll("li");
            console.log(liList);
            return liList.length === 2;
          },
          error: "You should have 2 list items now!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelectorAll("li > p");
            return checkElementText(p[0], "Lettuce");
          },
          error: "Don't change the content of your previous list item!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelectorAll("li > p");
            const liList = frame.querySelectorAll("li");
            return isElementChildOf(p[1], liList[1]);
          },
          error: "Don't forget to add the paragraph in your new list item!",
        },
        {
          testFunc: (frame) => {
            const p = frame.querySelector("li:nth-of-type(2) > p");

            return checkElementText(p, "Tomato");
          },
          error: "Don't forget to add the paragraph in your new list item!",
        },
      ],
      instruction:
        "Add a new list item underneath the current one with content of 'Tomato'",
    },
  ],
};
