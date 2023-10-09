import {
  checkElementAttribute,
  isElementChildOf,
  areElementsInOrder,
} from "../helpers/domHelpers";
export default {
  title: "Adding images",
  category: "Basic HTML",
  defaultCode: {
    htmlCode: `<div>
  <h1>John Doe</h1>
  <div><p>Software engineer</p></div>
</div>`,
    cssCode: `div {
  border: solid 2px red;
}
div > div {
  border: solid 2px blue;
}`,
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            const image = frame.querySelector("img");
            return isElementChildOf(image, frame);
          },
          error: "Add an image with <tag>img</tag>!",
        },
        {
          testFunc: (frame) => {
            const h1 = frame.querySelector("h1");
            return isElementChildOf(h1, frame);
          },
          error: "Don't touch the h1 :/",
        },
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            const image = frame.querySelector("img");

            return isElementChildOf(image, div[0]);
          },
          error:
            "Make sure the <tag>img</tag> is in the outer <tag>div</tag> and not in the nested one",
        },
        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            const image = frame.querySelector("img");
            const h1 = frame.querySelector("h1");
            return areElementsInOrder([h1, div[1], image], div[0]);
          },
          error:
            "The <tag>img</tag> should be below the nested <tag>div</tag> as well",
        },
      ],
      instruction:
        "Add an <tag>img</tag> tag underneath the nested <tag>div</tag>",
    },
    {
      tests: [
        {
          testFunc: (frame) => {
            const image = frame.querySelector("img");
            return isElementChildOf(image, frame);
          },
          error: "Where did the image go???",
        },

        {
          testFunc: (frame) => {
            const div = frame.querySelectorAll("div");
            const image = frame.querySelector("img");
            const h1 = frame.querySelector("h1");
            return areElementsInOrder([h1, div[1], image], div[0]);
          },
          error: "The image should be below the nested <tag>div</tag>!",
        },
        {
          testFunc: (frame) => {
            const image = frame.querySelector("img");
            return checkElementAttribute(
              image,
              "src",
              "https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905"
            );
          },
          error: "Remember to set the source of the image to the link!",
        },
      ],
      instruction:
        "Add an attribute of 'src' and set it to https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905",
    },
  ],
};
