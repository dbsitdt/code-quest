import { checkElementProperty, isElementChildOf } from "../helpers/domHelpers";
export default {
  title: "List styling",
  category: "Basic CSS",
  lastInCat: true,
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<h1>Shopping List</h1>\n<ul>\n   <li>Lettuce</li>\n  <li>Tomato</li>\n</ul>",
    cssCode: "",
  },
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
                'url("https://www.dbspd.edu.hk/sites/default/files/inline-images/dbslogo.png")'
              ) ||
              checkElementProperty(
                ul,
                "list-style-image",
                "url('https://www.dbspd.edu.hk/sites/default/files/inline-images/dbslogo.png')"
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
