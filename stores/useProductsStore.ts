import { defineStore } from "pinia";
import { STORE_KEY } from "~/constants/store";
import type { IProductList } from "~/types/products";

const paramsProductsDefault = {
  _page: 0,
  _limit: 6,
};

interface IParamsProducts {
  _page: number;
  _limit: number;
  _sort?: string;
  _order?: string;
}

export const useProductsStore = defineStore(STORE_KEY.PRODUCTS, () => {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const toast = useToast();

  const products = ref<IProductList>([]);
  const highestRatingProducts = ref<IProductList>([]);
  const highestCommissionProducts = ref<IProductList>([]);
  const params = ref<IParamsProducts>(paramsProductsDefault);
  const hasMore = ref(true);
  const error = ref("");
  const isLoading = ref(false);

  // fetcher to get products
  const fetchProducts = async ({
    _page,
    _limit,
    _sort,
    _order,
  }: Partial<IParamsProducts>) => {
    try {
      isLoading.value = true;
      const data: IProductList = await $fetch(`${apiBase}/products`, {
        method: "GET",
        params: {
          ...params.value,
          _page,
          _limit,
          ...(_sort && { _sort }),
          ...(_order && { _order }),
        },
      });
      return data;
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      error.value = errorMessage;
      toast.error(errorMessage);
      return [];
    } finally {
      isLoading.value = false;
    }
  };

  // handle get next page for inifinte scroll
  const fetchNextPageProducts = async () => {
    if (isLoading.value || !hasMore.value) return;

    const nextPage = params.value._page + 1;
    const data = await fetchProducts({
      ...params.value,
      _page: nextPage,
    });

    // extend existing products with new data
    products.value = [...products.value, ...data];

    // set hasMore to prevent fetching for not existing data
    hasMore.value = !data.length ? false : true;

    // update the params for next fetch
    params.value = {
      ...params.value,
      _page: nextPage,
    };
  };

  // handle get highest rating
  const fetchHighestRatingProducts = async () => {
    const data = await fetchProducts({
      _page: 1,
      _limit: 10,
      _sort: "rating",
      _order: "desc",
    });

    highestRatingProducts.value = data;
  };

  // handle get highest rating
  const fetchHighestCommissionProducts = async () => {
    const data = await fetchProducts({
      _page: 1,
      _limit: 10,
      _sort: "commissionPrice",
      _order: "desc",
    });

    highestCommissionProducts.value = data;
  };

  const isError = computed(() => !!error.value);

  return {
    products,
    highestRatingProducts,
    highestCommissionProducts,
    hasMore,
    isLoading,
    isError,
    error,
    fetchProducts,
    fetchNextPageProducts,
    fetchHighestRatingProducts,
    fetchHighestCommissionProducts,
  };
});
