import React from "react";
import { ResourceItem, TextStyle, Thumbnail } from "@shopify/polaris";

const ProductThumbnail = ({ product, selectProductHandler }) => {
  const { _id: id, name, image, price } = product;
  const media = <Thumbnail source={image} alt={name} />;

  return (
    <ResourceItem
      id={id}
      media={media}
      accessibilityLabel={`Details for ${name}`}
      onClick={selectProductHandler}
    >
      <h3>
        <TextStyle variation="strong">{name}</TextStyle>
      </h3>
      <div>
        <TextStyle variation="positive">${price}</TextStyle>
      </div>
    </ResourceItem>
  );
};

export default ProductThumbnail;
