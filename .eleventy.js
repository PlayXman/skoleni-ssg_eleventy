module.exports = function ( eleventyConfig ) {
	eleventyConfig.addPassthroughCopy( "src/assets" );

	return {
		dir: {
			input: "src",
			output: "build",
			includes: "components"
		},
		templateFormats: [
			"md"
		],
		passthroughFileCopy: true
	};
};
