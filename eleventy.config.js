import pluginSass from 'eleventy-sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    postcss: postcss([autoprefixer]),
    input: './src/css/*.sass',
    output: './_site/css',
  });
  eleventyConfig.addPassthroughCopy('src/css/*.css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
