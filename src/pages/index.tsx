import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import SEO from "../components/seo";
import HomeBanner from "../components/home-banner/home-banner";
import CategoryBlocks from "../components/category-blocks/category-blocks";
import LatestProducts from "../components/latest-products/latest-products-home";
import HowItWorks from "../components/how-it-works/how-it-works";
import FeaturedProducts from "../components/featured-products/featured-products-home";
import TrendingProducts from "../components/trending-products/trending-products-home";
import CallusBanner from "../components/call-us-banner/call-us-banner";

const indexPageStaticQuery = graphql`
  query {
    prismic {
      allHomes {
        edges {
          node {
            banner
            banner_button_text
            banner_subtitle
            banner_title
            category_block {
              category_slug
              category_title
              image
              imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            call_us_banner
            call_us_button_text
            call_us_title
            how_it_works_subtitle
            how_it_works_title
            trending_block_title
            view_more_text
            how_it_works_group {
              title
              description
              image
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<{}> = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${indexPageStaticQuery}`}
    render={(data) => {
      const node = get(data, "prismic.allHomes.edges[0].node");
      const banner = node.banner;
      const bannerTitle = node.banner_title;
      const bannerSubTitle = node.banner_subtitle;
      const bannerButtonText = node.banner_button_text;
      const categoryBlock = node.category_block;
      const callUsBanner = node.call_us_banner;
      const callUsTitle = node.call_us_title;
      const callUsButtonText = node.call_us_button_text;
      const howItWorksTitle = node.how_it_works_title;
      const howItWorksSubtitle = node.how_it_works_subtitle;
      const howItWorksGroup = node.how_it_works_group;
      const trendingBlockTitle = node.trending_block_title;
      const viewMoreTexts = node.view_more_text;
      return (
        <Fragment>
          <SEO title="Home" />
          {/* End of home seo */}

          <HomeBanner
            banner={banner}
            bannerTitle={bannerTitle}
            bannerSubTitle={bannerSubTitle}
            bannerButtonText={bannerButtonText}
          />
          {/* End of banner */}

          <CategoryBlocks categoryBlock={categoryBlock} />
          {/* End of categories */}

          <FeaturedProducts />
          {/* End of latest products */}

          <TrendingProducts />
          {/* End of trending products */}

          <HowItWorks
            howItWorksTitle={howItWorksTitle}
            howItWorksSubtitle={howItWorksSubtitle}
            howItWorksGroup={howItWorksGroup}
          />
          {/* End of how it works */}

          <LatestProducts />
          {/* End of featured products */}

          <CallusBanner
            callUsBanner={callUsBanner}
            callUsTitle={callUsTitle}
            callUsButtonText={callUsButtonText}
          />
          {/* End of call us banner */}
        </Fragment>
      );
    }}
  />
);

export default IndexPage;
