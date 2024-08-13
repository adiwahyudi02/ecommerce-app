import { defineStore } from "pinia";
import { LOCAL_STORAGE_KEY } from "~/constants/localstorage";
import { STORE_KEY } from "~/constants/store";
import type { IProduct, IProductList } from "~/types/products";

export const useShopStore = defineStore(STORE_KEY.SHOP, () => {
  const toast = useToast();

  const isProductAddedToShop = ref(false);

  const products = ref<IProductList>([]);
  const error = ref("");
  const isLoading = ref(false);

  const getExistingShopProduct = () => {
    const existingProducts: IProductList = getLocalStorage(
      LOCAL_STORAGE_KEY.SHOP,
      [],
    );

    return existingProducts;
  };

  // fetcher to get products on shop
  const fetchShopProducts = async () => {
    try {
      isLoading.value = true;
      const shopProducts = getExistingShopProduct();
      if (shopProducts) products.value = shopProducts;
      else setLocalStorage(LOCAL_STORAGE_KEY.SHOP, []);
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      error.value = errorMessage;
      toast.error(errorMessage);
    } finally {
      isLoading.value = false;
    }
  };

  const checkIsProductAddedToShop = (product: IProduct) => {
    const existingProducts = getExistingShopProduct();
    const isProductExistOnList = existingProducts.find(
      (item) => item.id === product?.id,
    );

    isProductAddedToShop.value = !!isProductExistOnList;
    return !!isProductExistOnList;
  };

  const addProductToShop = (newProduct: IProduct) => {
    const isAddedToShop = checkIsProductAddedToShop(newProduct);
    if (isAddedToShop) return;

    const existingProducts = getExistingShopProduct();
    setLocalStorage(LOCAL_STORAGE_KEY.SHOP, [...existingProducts, newProduct]);
    isProductAddedToShop.value = true;
    toast.success("The product successfully added to your shop");
  };

  const removeProductFromShop = (product: IProduct) => {
    const isAddedToShop = checkIsProductAddedToShop(product);
    if (!isAddedToShop) return;

    const existingProducts = getExistingShopProduct();

    const removeProductFromExisting = existingProducts.filter(
      (item) => item.id !== product.id,
    );

    setLocalStorage(LOCAL_STORAGE_KEY.SHOP, removeProductFromExisting);
    isProductAddedToShop.value = false;
    toast.success("The product successfully removed from your shop");
  };

  const isError = computed(() => !!error.value);

  return {
    products,
    isLoading,
    isError,
    error,
    isProductAddedToShop,
    fetchShopProducts,
    addProductToShop,
    removeProductFromShop,
    checkIsProductAddedToShop,
  };
});
