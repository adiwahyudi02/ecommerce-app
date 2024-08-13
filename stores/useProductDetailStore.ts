import { defineStore } from "pinia";
import { STORE_KEY } from "~/constants/store";
import type { IProduct } from "~/types/products";

export const useProductDetailStore = defineStore(
  STORE_KEY.PRODUCT_DETAIL,
  () => {
    const {
      public: { apiBase },
    } = useRuntimeConfig();
    const toast = useToast();

    const product = ref<IProduct>();
    const error = ref("");
    const isLoading = ref(false);

    // fetcher to get product details
    const fetchProduct = async (id: string) => {
      try {
        isLoading.value = true;
        const data: IProduct = await $fetch(`${apiBase}/products/${id}`, {
          method: "GET",
        });

        if (data) product.value = data;
        return data;
      } catch (err) {
        const errorMessage = getErrorMessage(err);
        error.value = errorMessage;
        toast.error(errorMessage);
      } finally {
        isLoading.value = false;
      }
    };

    const isError = computed(() => !!error.value);

    return {
      product,
      isLoading,
      isError,
      error,
      fetchProduct,
    };
  },
);
