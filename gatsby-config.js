module.exports = {
  plugins: [
    {
	    // You can have multiple instances of this plugin
      // to read source nodes from different locations on your
      // filesystem.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/files`,
      },
//      ignore: [`**/\.*`], // ignore files starting with a dot
    },
  ],
}