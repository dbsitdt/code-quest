import {
  checkElementAttribute,
  isElementChildOf,
  areElementsInOrder,
  checkElementText,
} from "../helpers/domHelpers";
export default {
  title: "Radio Input",
  category: "Basic HTML",
  lastInCat: true,
  defaultCode: {
    htmlCode:
      "<h1>Sign up to ITDT!</h1>\n<form>\n  <input type='radio' id='web' name='stream'>\n  <label>Web</label>\n</form>",
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
          error: "Don't delete the input!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");
            const form = frame.querySelector("form");

            return isElementChildOf(input, form);
          },
          error: "Make sure the input is still in the form!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");
            const form = frame.querySelector("form");

            return isElementChildOf(label, form);
          },
          error: "Make sure the label is still in the form!",
        },
        {
          testFunc: (frame) => {
            const input = frame.querySelector("input");

            return checkElementAttribute(input, "type", "radio");
          },
          error: "Keep the type of the input as radio!",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label");

            return checkElementAttribute(label, "for", "web");
          },
          error:
            "Now change the which input the label is pointing to with 'for' according to the name",
        },
      ],
      instruction:
        "Add an attribute of 'for' to the label set as the 'id' of the radio input. This will allow the input to be selected from the label.",
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
            const form = frame.querySelector("form");
            const inputs = form.querySelectorAll("input");
            return inputs.length === 2;
          },
          error: "Add the second input inside the form",
        },
        {
          testFunc: (frame) => {
            const inputs = frame.querySelectorAll("input");

            return (
              checkElementAttribute(inputs[1], "type", "radio") &&
              checkElementAttribute(inputs[1], "id", "app") &&
              checkElementAttribute(inputs[1], "name", "stream")
            );
          },
          error: "Don't forget to set the correct attributes in the new input",
        },
      ],
      instruction:
        "Add a second input with type of 'radio', id of 'app' and name of 'stream'",
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
            const form = frame.querySelector("form");
            const inputs = form.querySelectorAll("input");
            return inputs.length === 2;
          },
          error: "Add the second input inside the form",
        },
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            const input = form.querySelector("input[type='radio']#app");
            return isElementChildOf(input, form);
          },
          error: "Don't modify the second input!",
        },
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            const labels = form.querySelectorAll("label");
            return labels.length === 2;
          },
          error: "Add the second label inside the form",
        },
        {
          testFunc: (frame) => {
            const labels = frame.querySelectorAll("label");
            return checkElementAttribute(labels[1], "for", "app");
          },
          error:
            "Change the attributes of the label correctly! Remember, it should point to the id of the input you want to target.",
        },
        {
          testFunc: (frame) => {
            const label = frame.querySelector("label[for='app']");

            return checkElementText(label, "App");
          },
          error: "Don't forget to change the content of the label :)",
        },
        {
          testFunc: (frame) => {
            const form = frame.querySelector("form");
            const input1 = form.querySelector("input[type='radio']#web");
            const input2 = form.querySelector("input[type='radio']#app");
            const label1 = frame.querySelector("label[for='web']");
            const label2 = frame.querySelector("label[for='app']");
            return areElementsInOrder([input1, label1, input2, label2], form);
          },
          error: "The label should be underneath the new input!",
        },
      ],
      instruction:
        "Add a new label underneath the second input with its 'for' attribute set to the the id of the input above. It's content should be 'App'",
    },
  ],
};
