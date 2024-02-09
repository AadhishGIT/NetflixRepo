import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useSearchMovieList = (searchValue?: string) => {
  const { data, error, isLoading } = useSWR(
    searchValue ? "/api/search" : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useSearchMovieList;
