module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images')
  
    return {
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'njk'
    }
  }