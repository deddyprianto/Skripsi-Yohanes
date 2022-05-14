import axios from "axios";
import useSWR from "swr";

export const useUser = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `http://localhost:5000/api/backend/chat`,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
