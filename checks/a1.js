export default {
  title: "Changing Tag Content",
  category: "Basic HTML",
  disabled: { html: false, css: true },

  defaultCode: {
    htmlCode: "<h1>Hi!</h1>",
    cssCode: "",
  },
  steps: [
    {
      tests: [
        {
          testFunc: (frame) => {
            return frame.querySelector("h1");
          },
          error: "Where did the h1 go??? Add an h1 with the h1 tags",
        },
        {
          testFunc: (frame) => {
            return frame.querySelector("h1")?.textContent === "I love HTML!";
          },
          error: "You haven't changed the content yet!",
        },
      ],
      instruction: 'Change the content in <tag>h1</tag> to "I love HTML!"',
    },
  ],
};
