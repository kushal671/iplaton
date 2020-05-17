/** @jsx jsx */
import { Box, Container, Text, jsx } from "theme-ui";
import SocialLinks from "../ui-elements/social-links/social-links";
import styles from "./footer.styles";
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import { RichText } from "prismic-reactjs";

const footerStaticQuery = graphql`
  query {
    prismic {
      allCommons {
        edges {
          node {
            copyright_text
            social_links {
              social_link {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
              social_type
            }
          }
        }
      }
    }
  }
`;

const getSocialData = (links) => {
  const data = [];
  links.forEach((link) => {
    data.push({ type: link.social_type, link: link.social_link.url });
  });
  return data;
};

const Footer = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${footerStaticQuery}`}
    render={(data) => {
      const footerData = get(data, "prismic.allCommons.edges[0].node");
      const socialData = getSocialData(footerData.social_links);
      return (
        <Box as="footer" sx={styles.footer}>
          <Container sx={styles.container}>
            <Text className="copyright" sx={styles.copyright}>
              {RichText.render(footerData.copyright_text)}
            </Text>
            <SocialLinks items={socialData} />
          </Container>
        </Box>
      );
    }}
  />
);

export default Footer;
