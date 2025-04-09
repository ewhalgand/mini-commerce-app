import { writable } from "svelte/store";

export const useFetcher = (url: string, option = {}) => {
  const error = writable<{ err?: string | any; emptyFields?: string[] }>({});

  const fetchData = async (customOptions = {}) => {
    error.set({});

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
      return jsonData;
    } catch (err) {
      error.set({
        err:
          err instanceof TypeError
            ? "Network error: Unable to contact the server."
            : (err as Error).message,
      });
    }
  };

  return { error, fetchData };
};
