// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useFetch<T>(url: string) {
  return { data: null as T | null, loading: false, error: null };
}
