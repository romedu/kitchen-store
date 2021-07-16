import React, { useEffect, useState } from "react";
import { Modal } from "@shopify/polaris";
import ProductDetailsView from "./ProductDetailsView/ProductDetailsView";
import useFetch from "../hooks/useFetch";

const ProductModal = ({ productId, closeHandler }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, fetchProducts] = useFetch(`/api/products/${productId}`);

  useEffect(() => {
    const successfulFetchHandler = ({ product }) => setCurrentProduct(product);
    const failedFetchHandler = (err) => console.log("err", err);

    fetchProducts(null, successfulFetchHandler, failedFetchHandler);
  }, []);

  return (
    <Modal
      onClose={closeHandler}
      title={`Product: ${productId}`}
      loading={isLoading}
      open
      large
    >
      <Modal.Section>
        {currentProduct && (
          <ProductDetailsView productDetails={currentProduct} />
        )}
      </Modal.Section>
    </Modal>
  );
};

export default ProductModal;
