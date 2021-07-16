import { useCallback, useState } from "react";

const usePagination = (startingPage = 1) => {
  const [pageNum, setPageNum] = useState(startingPage);
  const navToPage = (pageToNavigate) => setPageNum(pageToNavigate);
  const navToNextPage = useCallback(() => navToPage(pageNum + 1), [pageNum]);
  const navToPrevPage = useCallback(() => navToPage(pageNum - 1), [pageNum]);

  return [pageNum, navToNextPage, navToPrevPage];
};

export default usePagination;
