import { writable } from "svelte/store";

export const useFetcher = (url: string, option = {}) => {
  const data = writable<any | null>(null);
  const error = writable<{ err?: string; emptyFields?: string[] }>({});
  const loading = writable(false);

  const fetchData = async (customOptions = {}) => {
    loading.set(true);
    error.set({});
    data.set(null);

    try {
      const res = await fetch(url, { ...option, ...customOptions });

      if (!res.ok) {
        const errorData = await res.json();
        error.set(errorData);
        throw new Error(
          errorData.err || `Erreur ${res.status}: ${res.statusText}`
        );
      }

      const jsonData = await res.json();
      data.set(jsonData);
      return jsonData;
    } catch (err) {
      error.set({
        err:
          err instanceof TypeError
            ? "Erreur réseau : Impossible de contacter le serveur."
            : (err as Error).message,
      });
    } finally {
      loading.set(false);
    }
  };

  return { data, error, loading, fetchData };
};
