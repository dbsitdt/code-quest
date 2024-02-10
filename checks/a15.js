import { checkElementProperty, isElementChildOf } from "../utils/domHelpers";
export default {
  title: "List styling",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<h1>Shopping List</h1>\n<ul>\n   <li>Lettuce</li>\n  <li>Tomato</li>\n</ul>",
    cssCode: "",
  },
  description:
    "There are many ways to spice up a list aside from the basic bullet points. We now try some of them.",
  links: [
    {
      name: "MDN list-style property",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style",
    },
  ],
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            return (
              frame.querySelector("ul") &&
              frame.querySelectorAll("li").length == 2
            );
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return checkElementProperty(
              ul,
              "background-color",
              "rgb(127, 255, 212)"
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction: "Change the background of the ul to <tag>aquamarine</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return (
              frame.querySelector("ul") &&
              frame.querySelectorAll("li").length == 2
            );
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return checkElementProperty(ul, "list-style-type", "circle");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>list-style</tag> of the unordered list to <tag>circle</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return (
              frame.querySelector("ul") &&
              frame.querySelectorAll("li").length == 2
            );
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return checkElementProperty(ul, "list-style-type", "none");
          },
          error: "Follow the instructions!",
        },
      ],
      instruction:
        "Set the <tag>list-style</tag> of the unordered list to <tag>none</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return (
              frame.querySelector("ul") &&
              frame.querySelectorAll("li").length == 2
            );
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return (
              checkElementProperty(
                ul,
                "list-style-image",
                'url("https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg")'
              ) ||
              checkElementProperty(
                ul,
                "list-style-image",
                "url('https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg')"
              )
            );
          },
          error:
            "Follow the instructions! You can google how to make your image as the marker of the list.",
        },
      ],
      instruction:
        "Set the <tag>list-style</tag> as an image: https://www.dbspd.edu.hk/sites/default/files/inline-images/dbslogo.png",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return (
              frame.querySelector("ul") &&
              frame.querySelectorAll("li").length == 2
            );
          },
          error: "Don't touch the html!",
        },
        {
          testFunc: (frame) => {
            const ul = frame.querySelector("ul");
            return (
              checkElementProperty(ul, "list-style-type", '"👍"') ||
              checkElementProperty(ul, "list-style-type", "'👍'")
            );
          },
          error: "Follow the instructions!",
        },
      ],
      instruction: "Set the <tag>list-style</tag> as <tag>\\1F44D</tag>",
    },
  ],
};
