const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query QueryDirectories {
      allDirectory {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allDirectory.edges.forEach(({node}) => {
    const dir = '/'+node.relativePath
    createPage({
      path: dir,
      component: path.resolve("./src/fileDirectory.js"),
      context: {
        dir,
      },
    })
  });
}