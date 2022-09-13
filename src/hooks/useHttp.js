import { useState, useCallback } from "react";

const useHttp = (requestFunction) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (requestData, applyData) => {
      setIsLoading(true);
      try {
        const responseData = await requestFunction(requestData);
        applyData(responseData);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    },
    [requestFunction]
  );

  return {
    isLoading,
    sendRequest,
  };
};

export default useHttp;
