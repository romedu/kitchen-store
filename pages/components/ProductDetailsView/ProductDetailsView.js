import React from "react";
import { Stack, TextStyle } from "@shopify/polaris";
import * as styles from "./ProductDetailsView.module.css";

const ProductDetailsView = ({ productDetails }) => {
  const { name, price, image, description } = productDetails;

  return (
    <div>
      <Stack vertical>
        <div className={styles.headerContainer}>
          <h3>
            <TextStyle variation="strong">{name}</TextStyle>
          </h3>
          <img src={image} alt={name} />
        </div>
        <div>{description}</div>
        <div>
          <TextStyle variation="positive">${price}</TextStyle>
        </div>
      </Stack>
    </div>
  );
};

export default ProductDetailsView;
