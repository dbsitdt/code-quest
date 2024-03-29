import {
  checkElementAttribute,
  isElementChildOf,
  areElementsInOrder,
  checkElementText,
} from "../utils/domHelpers";
export default {
  title: "Adding a submit button",
  category: "Working with forms",
  disabled: { html: false, css: true },

  lastInCat: true,
  defaultCode: {
    htmlCode:
      "<h1>Sign up to ITDT!</h1>\n<form>\n  <input type='radio' id='web' name='stream'>\n  <label>Web</label>\n  <input type='radio' id='app' name='stream'>\n  <label>App</label>\n</form>",
    cssCode: "/* Nothing to see here :) */",
  },
  description:
    "In this exercise you will learn how to use radio buttons as inputs.",
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
  steps: [
    {
      tests: [
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
            const input1 = frame.querySelector("input#web");
            const input2 = frame.querySelector("input#app");
            return (
              isElementChildOf(input1, frame) && isElementChildOf(input2, frame)
            );
          },
          error: "Don't touch the original inputs!",
        },
        {
          testFunc: (frame) => {
            const submitInput = frame.querySelector("input[type='submit']");
            const form = frame.querySelector("form");
            return isElementChildOf(submitInput, form);
          },
          error: "Time to do what the quest says...",
        },
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            form.addEventListener("submit", (e) => e.preventDefault());
            return true;
          },
          error: "Time to do what the quest says...",
        },
      ],
      instruction:
        "Add a new <tag>input</tag> with <tag>type</tag> of submit within the <tag>form</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            return isElementChildOf(form, frame);
          },
          error: "Don't delete the form!",
        },
        {
          testFunc: (frame) => {
            const input1 = frame.querySelector("input#web");
            const input2 = frame.querySelector("input#app");
            return (
              isElementChildOf(input1, frame) && isElementChildOf(input2, frame)
            );
          },
          error: "Don't touch the original inputs!",
        },
        {
          testFunc: (frame) => {
            const submitInput = frame.querySelector("input[type='submit']");
            const form = frame.querySelector("form");
            return isElementChildOf(submitInput, form);
          },
          error:
            "Don't touch your new submit input! Make sure it's in the form as well.",
        },
        {
          testFunc: (frame) => {
            const submitInput = frame.querySelector(
              "input[type='submit'][value='Submit application']"
            );
            const form = frame.querySelector("form");
            return isElementChildOf(submitInput, form);
          },
          error: "Time to do what the quest says...",
        },
      ],
      instruction:
        "Add an attribute of <tag>value</tag> onto the submit button, and set it to 'Submit application'",
    },
  ],
};
