export const useApiFetch = (request, opts) => {
  const config = useRuntimeConfig();

  return useFetch(request, { baseURL: config.public.baseURL, ...opts });
};
