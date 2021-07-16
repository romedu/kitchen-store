import React, { useEffect, useState } from "react";
import { Modal } from "@shopify/polaris";
import ProductDetailsView from "./ProductDetailsView/ProductDetailsView";
import ErrorModal from "./ErrorModal";
import useFetch from "../hooks/useFetch";
import useClearableState from "../hooks/useClearableState";

const ProductModal = ({ productId, closeHandler }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, fetchProducts] = useFetch(`/api/products/${productId}`);
  const [errorMessage, setErrorMessage, clearErrorMessage] = useClearableState();

  useEffect(() => {
    const successfulFetchHandler = ({ product }) => setCurrentProduct(product);
    const failedFetchHandler = ({ message }) => setErrorMessage(message);

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
        {errorMessage && <ErrorModal message={errorMessage} closeHandler={clearErrorMessage} />}
      </Modal.Section>
    </Modal>
  );
};

export default ProductModal;
