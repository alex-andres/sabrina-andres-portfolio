import { graphql, useStaticQuery } from "gatsby";

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode(limit: 12, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            id
            comments
            likes
            localFile {
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
              url
            }
          }
        }
      }
    }
  `);
  return data.allInstaNode.edges.map(({ node }) => ({
    image: node.localFile.childImageSharp.fixed,
    id: node.id,
    caption: node.caption,
    likes: node.likes,
    comments: node.coments,
  }));
};

export default useInstagram;
