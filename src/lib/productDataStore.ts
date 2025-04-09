import { get, writable } from "svelte/store";
import { useFetcher } from "./useFetcher";

interface Products {
  title: string;
  body: string;
  price: number;
}

export const productsData = writable<any[]>([]);
export const loading = writable(false);

const API_URL = "http://localhost:3001/api/products";

export const fetchProducts = async () => {
  const { error, fetchData } = useFetcher(API_URL);

  loading.set(true);

  const result = await fetchData();
  const currentError = get(error);

  loading.set(false);

  if (!currentError.err && result) {
    productsData.set(result);
  }

  return { loading, error: currentError.err };
};

export const postProduct = async (product: Products) => {
  const { error, fetchData } = useFetcher(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  const result = await fetchData();
  const currentError = get(error);

  if (!currentError.err && result) {
    await fetchProducts();
    return { success: true, error: null };
  }

  return { success: false, error: currentError.err };
};

export const deleteProduct = async (id: string) => {
  const { error, fetchData } = useFetcher(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const result = await fetchData();
  const currentError = get(error);

  if (!currentError.err && result) {
    await fetchProducts();
  }
};
