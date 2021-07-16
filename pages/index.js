import React, { useEffect, useState } from "react";
import { Card, Page, ResourceList } from "@shopify/polaris";
import ProductModal from "./components/ProductModal";
import ProductThumbnail from "./components/ProductThumbnail";
import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/usePagination";
import useClearableState from "./hooks/useClearableState";
import ErrorModal from "./components/ErrorModal";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [pageNum, navToNextPage, navToPrevPage] = usePagination();
  const [selectedProductId, setSelectedProductId, clearSelectedProductId] = useClearableState();
  const [errorMessage, setErrorMessage, clearErrorMessage] = useClearableState();
  const [isLoading, fetchProducts] = useFetch(`/api/products?page=${pageNum}`);
  const { totalPages = pageNum } = paginationData;
  const resourceName = {
    singular: "product",
    plural: "products",
  };
  const paginationOptions = {
    hasPrevious: paginationData.hasPrevPage,
    hasNext: paginationData.hasNextPage,
    label: `Page ${pageNum} of ${totalPages}`,
    onNext: navToNextPage,
    onPrevious: navToPrevPage,
  };

  useEffect(() => {
    const successfulFetchHandler = (data) => {
      setProducts(data.products);
      setPaginationData(data.paginationData);
    };
    const failedFetchHandler = ({ message }) => {
      setErrorMessage(message);
      setPaginationData({});
    }

    fetchProducts(null, successfulFetchHandler, failedFetchHandler);
  }, [pageNum]);

  return (
    <Page title="Products" pagination={paginationOptions} divider>
      <Card>
        <ResourceList
          resourceName={resourceName}
          items={products}
          loading={isLoading}
          renderItem={(product) => (
            <ProductThumbnail
              product={product}
              selectProductHandler={() => setSelectedProductId(product._id)}
            />
          )}
        />
        {selectedProductId && (
          <ProductModal
            productId={selectedProductId}
            closeHandler={clearSelectedProductId}
          />
        )}
        {errorMessage && <ErrorModal message={errorMessage} closeHandler={clearErrorMessage} />}
      </Card>
    </Page>
  );
};

export default Index;
