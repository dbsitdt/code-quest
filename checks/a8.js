import {
  checkElementAttribute,
  isElementChildOf,
  areElementsInOrder,
  checkElementText,
} from "../utils/domHelpers";
export default {
  title: "Text Input",
  category: "Working with forms",
  disabled: { html: false, css: true },
  description:
    "In this exercise you will learn how to add text inputs into a form to accept user input.",
  links: [
    {
      name: "MDN form element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
    },
    {
      name: "MDN input element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
    },
  ],
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
          error: "Don't delete the <tag>h1</tag>.",
        },
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Add the <tag>form</tag> element.",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const form = frame.querySelector("form");
            return areElementsInOrder([h1, form], frame);
          },
          error:
            "The <tag>form</tag> element should be underneath the <tag>h1</tag>!",
        },
      ],

      instruction: "Add a <tag>form</tag> element underneath the <tag>h1</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "Don't delete the <tag>h1</tag>.",
        },

        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Don't delete the <tag>form</tag> element.",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const form = frame.querySelector("form");
            return areElementsInOrder([h1, form], frame);
          },
          error:
            "The <tag>form</tag> element should still be underneath the <tag>h1</tag>!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            return isElementChildOf(input, frame);
          },
          error: "Don't forget to add the <tag>input</tag>!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");

            return isElementChildOf(input, form);
          },
          error: "Make sure the <tag>input</tag> is in the <tag>form</tag>!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");

            return checkElementAttribute(input, "type", "text");
          },
          error:
            "You should change the attribute of <tag>type</tag> of the <tag>input</tag> to 'text'!",
        },
      ],
      instruction:
        "Add an input in the <tag>form</tag> element. It should have an attribute of <tag>type</tag> set to 'text'.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "Don't delete the <tag>h1</tag>.",
        },

        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Don't delete the <tag>form</tag> element.",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            const form = frame.querySelector("form");
            return areElementsInOrder([h1, form], frame);
          },
          error:
            "The <tag>form</tag> element should still be underneath the h1!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            return isElementChildOf(input, frame);
          },
          error: "Don't forget to add the <tag>input</tag>!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");

            return isElementChildOf(input, form);
          },
          error: "Make sure the <tag>input</tag> is in the <tag>form</tag>!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");

            return checkElementAttribute(input, "type", "text");
          },
          error:
            "The attribute of <tag>type</tag> of the <tag>input</tag> should be 'text'!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            return isElementChildOf(label, frame);
          },
          error: "Don't forget to add the <tag>label</tag>!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            const form = frame.querySelector("form");

            return isElementChildOf(label, form);
          },
          error: "Make sure the <tag>label</tag> is in the form!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");
            return areElementsInOrder([label, input], form);
          },
          error:
            "Remember to add the <tag>label</tag> ABOVE the <tag>input</tag>!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            return checkElementText(label, "Full Name");
          },
          error: "Remember to change the content of the <tag>label</tag>!",
        },
      ],
      instruction:
        "Add a <tag>label</tag> above the <tag>input</tag> with the content of 'Full Name'",
    },
  ],
};
