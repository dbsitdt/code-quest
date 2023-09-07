import {
  checkElementText,
  isElementChildOf,
  areElementsInOrder,
} from "../helpers/domHelpers";
export default {
  title: "Ordered Lists",
  category: "Basic HTML",
  defaultCode: {
    htmlCode: "<h1>Instructions</h1>",
    cssCode: "/* Nothing to see here :) */",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const ol = frame.querySelector("ol");
            return isElementChildOf(ol, frame);
          },
          error: "Add an ordered list!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const ol = frame.querySelector("ol");
            return areElementsInOrder([h1, ol], frame);
          },
          error: "The ordered list should be under h1",
        },
      ],

      instruction: "Add an ordered list under the h1",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const ol = frame.querySelector("ol");
            return isElementChildOf(ol, frame);
          },
          error: "Where did the ordered list go???",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const ol = frame.querySelector("ol");
            return areElementsInOrder([h1, ol], frame);
          },
          error: "The ordered list should still be under h1",
        },
        {
          testFunc: (frame) => {
            const ol = frame.querySelector("ol");
            const li = frame.querySelector("li");
            return isElementChildOf(li, ol);
          },
          error: "Now add a list item in the ol with li!",
        },
        {
          testFunc: (frame) => {
            const li = frame.querySelector("li");
            return checkElementText(li, "Write some HTML");
          },
          error: "Don't forget to change the content of the list item!",
        },
      ],
      instruction:
        "Add a list item in the list with content of 'Write some HTML'!",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const ol = frame.querySelector("ol");
            return isElementChildOf(ol, frame);
          },
          error: "Where did the ordered list go???",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const ol = frame.querySelector("ol");
            return areElementsInOrder([h1, ol], frame);
          },
          error: "The ordered list should still be under h1",
        },
        {
          testFunc: (frame) => {
            const liList = frame.querySelectorAll("li");
            return liList.length === 2;
          },
          error: "You should have 2 list items now!",
        },
        {
          testFunc: (frame) => {
            const liList = frame.querySelectorAll("li");
            return checkElementText(liList[0], "Write some HTML");
          },
          error: "Don't change the previous list item's content!",
        },
        {
          testFunc: (frame) => {
            const liList = frame.querySelectorAll("li");
            return checkElementText(liList[1], "Engineer some CSS");
          },
          error: "Don't forget to change the content of your new list item!",
        },
      ],
      instruction:
        "Add a new list item underneath the current one with content of 'Engineer some CSS'",
    },
  ],
};
