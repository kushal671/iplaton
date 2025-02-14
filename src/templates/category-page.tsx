import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import CategoryBanner from "../components/category-banner/category-banner";
import ProductGrid from "../components/ui-elements/product-grid/product-grid";

const CategoryPage = ({ data, pageContext }) => {
  const { image, products } = data.shopifyCollection;
  const productsType = pageContext?.handle;
  const title = productsType.charAt(0).toUpperCase() + productsType.slice(1);

  return (
    <>
      <SEO title={title} />
      <CategoryBanner title={title} bgImage={image} />
      <ProductGrid id="category" products={products} isCategoryProduct={true} />
    </>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      image {
        id
        src
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      products {
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
              fluid(maxWidth: 910, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryPage;
