const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPassthroughCopy("layouts/templates.js");
    eleventyConfig.addPassthroughCopy("styles/main.css");
    eleventyConfig.addPassthroughCopy("books/books.json");
    eleventyConfig.addPassthroughCopy("books/books.js");
    eleventyConfig.addPassthroughCopy("public");

  return {
    // Replace "repository-name" with your actual GitHub repository name
    pathPrefix: "/",
    dir: {
      output: "_site" // Optional: Change output from default '_site' to 'docs'
    }
  };
};
