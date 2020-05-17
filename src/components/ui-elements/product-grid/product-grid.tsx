/** @jsx jsx */
import { Flex, Box, Grid, Heading, Text, jsx, Button } from "theme-ui";
import ProductCard from "../product-card/product-card";
import styles from "./product-grid.style";

type PropsType = {
  id?: string;
  close?: Function;
  isCategoryProduct?: boolean;
  gridTitle?: string;
  products: any;
};

const ProductGrid: React.FC<PropsType> = ({
  id,
  close,
  gridTitle,
  products,
  isCategoryProduct = false,
}) => {
  const getPrice = (price: any) =>
    Intl.NumberFormat(undefined, {
      currency: price.currencyCode,
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price && price.amount ? price.amount : 0));
  return (
    <Box id={id} sx={styles.wrapper}>
      <Flex sx={styles.header}>
        {gridTitle && <Heading as="h3">{gridTitle}</Heading>}
        {close && (
          <Button variant="text" onClick={close}>
            Clear
          </Button>
        )}
      </Flex>
      {products ? (
        <Grid sx={styles.productGrid}>
          {products.map((product: any) => {
            const {
              id,
              title,
              shopifyId,
              variants,
              availableForSale,
              images: [firstImage],
              variants: [firstVariant],
            } = isCategoryProduct ? product : product.node;
            return (
              <ProductCard
                key={id}
                title={title}
                shopifyId={shopifyId}
                availableForSale={availableForSale}
                price={getPrice(firstVariant?.priceV2)}
                thumbnail={firstImage?.localFile?.childImageSharp?.fluid}
                variants={variants}
              />
            );
          })}
        </Grid>
      ) : (
        <Text>No Products found!</Text>
      )}
    </Box>
  );
};

export default ProductGrid;
