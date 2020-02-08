module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images')
  
    return {
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'njk'
    }
  }