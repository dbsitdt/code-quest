import { checkElementProperty } from "../utils/domHelpers";
export default {
  title: "Dealing with images",
  category: "Basic CSS",
  disabled: { html: true, css: false },
  defaultCode: {
    htmlCode:
      "<img src='https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg'/>",
    cssCode: "",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("img");
          },
          error: "Where did the image go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return (
              img.getAttribute("src") ===
              "https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg"
            );
          },
          error: "Don't change the src of the image.",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return checkElementProperty(img, "width", "500px");
          },
          error: "Now change the width of the img.",
        },
      ],
      instruction:
        "Change the <tag>width</tag> of the <tag>img</tag> to <tag>500px</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("img");
          },
          error: "Where did the image go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return (
              img.getAttribute("src") ===
              "https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg"
            );
          },
          error: "Don't change the src of the image.",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return checkElementProperty(img, "width", "500px");
          },
          error: "Don't edit the width of the image.",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return checkElementProperty(img, "height", "300px");
          },
          error: "Now change the height of the image.",
        },
      ],
      instruction:
        "Change the <tag>height</tag> of the <tag>img</tag> to <tag>300px</tag>.",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("img");
          },
          error: "Where did the image go? Don't delete it!",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return (
              img.getAttribute("src") ===
              "https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/cb/b9/f9/cbb9f9b5-97db-ca9e-e07d-efabcf2ec51b/source/512x512bb.jpg"
            );
          },
          error: "Don't change the src of the image.",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return (
              checkElementProperty(img, "height", "300px") &&
              checkElementProperty(img, "width", "500px")
            );
          },
          error: "Don't change the widht or heighta of the img.",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return (
              checkElementProperty(img, "height", "300px") &&
              checkElementProperty(img, "width", "500px")
            );
          },
          error: "Don't change the widht or heighta of the img.",
        },
        {
          testFunc: (frame) => {
            const img = frame.querySelector("img");
            return checkElementProperty(img, "object-fit", "cover");
          },
          error: "Now change the object-fit",
        },
      ],
      instruction:
        "Add a new property <tag>object-fit</tag> to the <tag>img</tag> set to <tag>cover</tag>.",
    },
  ],
};
