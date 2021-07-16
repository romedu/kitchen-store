import { useEffect, useState } from "react";
import { Card, Page, ResourceList } from "@shopify/polaris";
import ProductModal from "./components/ProductModal";
import ProductThumbnail from "./components/ProductThumbnail";
import useFetch from "./hooks/useFetch";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isLoading, fetchProducts] = useFetch("/api/products");
  const clearSelectedProductId = () => setSelectedProductId(null);
  const resourceName = {
    singular: "product",
    plural: "products",
  };

  useEffect(() => {
    const successfulFetchHandler = (data) => setProducts(data.products);
    const failedFetchHandler = (err) => console.log("err", err);

    fetchProducts(null, successfulFetchHandler, failedFetchHandler);
  }, []);

  return (
    <Page title="Products" divider>
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
      </Card>
    </Page>
  );
};

export default Index;
