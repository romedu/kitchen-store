import { useState } from "react";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { useAppBridge } from "@shopify/app-bridge-react";

const useFetch = (url, method = "GET") => {
  const [isFetching, setFetchingState] = useState(false);
  const app = useAppBridge();

  async function makeFetchRequest(body, successCb, errorCb) {
    setFetchingState(true);

    try {
      const token = await getSessionToken(app);
      const fetchOptions = {
        body: body && JSON.stringify(body),
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const fetchResult = await fetch(url, fetchOptions);

      await handleResponse(fetchResult, successCb, errorCb);
    } catch (e) {
      const defaultNetworkError = { message: "Connection Error" };

      errorCb(defaultNetworkError, 502);
      setFetchingState(false);
    }
  }

  async function handleResponse(fetchResult, successCb, errorCb) {
    try {
      const data = await fetchResult.json();
      const { status: statusCode } = fetchResult;

      if (statusCode >= 400) errorCb(data, statusCode);
      else successCb(data, statusCode);
    } catch (error) {
      const defaultError = { message: "Internal server error" };
      errorCb(defaultError, 500);
    }

    setFetchingState(false);
  }

  return [isFetching, makeFetchRequest];
};

export default useFetch;
