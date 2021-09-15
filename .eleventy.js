module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("search.js");  
    eleventyConfig.addPassthroughCopy("style.css");  
};