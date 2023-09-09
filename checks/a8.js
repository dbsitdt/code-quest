import {
  checkElementAttribute,
  isElementChildOf,
  areElementsInOrder,
  checkElementText,
} from "../helpers/domHelpers";
export default {
  title: "Text Input",
  category: "Basic HTML",
  lastInCat: true,
  defaultCode: {
    htmlCode: "<h1>Sign up to ITDT!</h1>",
    cssCode: "/* Nothing to see here :) */",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "Don't delete the h1.",
        },
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Add the form element.",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const form = frame.querySelector("form");
            return areElementsInOrder([h1, form], frame);
          },
          error: "The form element should be underneath the h1!",
        },
      ],

      instruction: "Add a form element underneath the h1",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "Don't delete the h1.",
        },

        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Don't delete the form element.",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const form = frame.querySelector("form");
            return areElementsInOrder([h1, form], frame);
          },
          error: "The form element should still be underneath the h1!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            return isElementChildOf(input, frame);
          },
          error: "Don't forget to add the input!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");

            return isElementChildOf(input, form);
          },
          error: "Make sure the input is in the form!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");

            return checkElementAttribute(input, "type", "text");
          },
          error:
            "You should change the attribute of type of the input to 'text'!",
        },
      ],
      instruction:
        "Add an input in the form element. It should have an attribute of 'type' set to 'text'.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "Don't delete the h1.",
        },

        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Don't delete the form element.",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const form = frame.querySelector("form");
            return areElementsInOrder([h1, form], frame);
          },
          error: "The form element should still be underneath the h1!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            return isElementChildOf(input, frame);
          },
          error: "Don't forget to add the input!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");

            return isElementChildOf(input, form);
          },
          error: "Make sure the input is in the form!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");

            return checkElementAttribute(input, "type", "text");
          },
          error: "The attribute of type of the input should be 'text'!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            return isElementChildOf(label, frame);
          },
          error: "Don't forget to add the label!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            const form = frame.querySelector("form");

            return isElementChildOf(label, form);
          },
          error: "Make sure the label is in the form!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");
            return areElementsInOrder([label, input], form);
          },
          error: "Remember to add the lable ABOVE the input!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            return checkElementText(label, "Full Name");
          },
          error: "Remember to change the content of the label!",
        },
      ],
      instruction:
        "Add a label above the input with the content of 'Full Name'",
    },
  ],
};
