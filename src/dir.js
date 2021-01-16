import React from 'react'
import { graphql } from 'gatsby'

export default ({data}) => {
  console.log(data)
  return <ul>
    <li key='..'><a href='../'>..</a></li>
    {data.allDirectory.edges.map(({node}) => {
      return <li key={node.base+'/'}><a href={'./'+node.base}>{node.base+'/'}</a></li>
    })}
    {data.allFile.edges.map(({node}) => {
      return <li key={node.base}><a href={node.publicURL}>{node.base}</a></li>
    })}
  </ul>
}

export const query = graphql`
  query DirQuery($dir: String) {
    allFile(filter: {relativeDirectory: {eq: $dir}}) {
      edges {
        node {
          publicURL
          base
        }
      }
    }
    allDirectory(filter: {relativeDirectory: {eq: $dir}}) {
      edges {
        node {
          base
        }
      }
    }
}

`
