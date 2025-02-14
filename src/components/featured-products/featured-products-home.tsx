import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ProductGrid from "../ui-elements/product-grid/product-grid";

const featuredStaticQuery = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "Featured" } }, limit: 10) {
      edges {
        node {
          id
          title
          handle
          createdAt
          shopifyId
          availableForSale
          variants {
            id
            price
            priceV2 {
              amount
              currencyCode
            }
            shopifyId
            availableForSale
          }
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const FeaturedProductsHome = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${featuredStaticQuery}`}
    render={({ allShopifyProduct }) => {
      const products = allShopifyProduct?.edges;
      return (
        <ProductGrid
          id="feature"
          gridTitle="Featured Product"
          products={products}
        />
      );
    }}
  />
);

export default FeaturedProductsHome;
