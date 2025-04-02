import { writable } from "svelte/store";

export const useFetcher = (url: string, option = {}) => {
  const data = writable<any | null>(null);
  const error = writable<string | null>(null);
  const loading = writable(false);

  const fetchData = async (customOptions = {}) => {
    loading.set(true);
    error.set(null);

    try {
      const res = await fetch(url, { ...option, ...customOptions });

      if (!res.ok) {
        throw new Error(`Erreur ${res.status}: ${res.statusText}`);
      }

      const jsonData = await res.json();
      data.set(jsonData);
      return jsonData;
    } catch (err) {
      error.set((err as Error).message);
    } finally {
      loading.set(false);
    }
  };

  return { data, error, loading, fetchData };
};
