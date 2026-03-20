module.exports = function(eleventyConfig) {
 eleventyConfig.addPassthroughCopy("layouts/templates.js");
 eleventyConfig.addPassthroughCopy("styles/main.css");
 eleventyConfig.addPassthroughCopy("books/books.json");
 eleventyConfig.addPassthroughCopy("books/books.js");
 eleventyConfig.addPassthroughCopy("public");
};

