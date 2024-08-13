import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ProductList from "../ProductList.vue";
import type { IProductList } from "~/types/products";

describe("ProductList.vue", () => {
  it("renders a loading component when isLoading is true", () => {
    const wrapper = mount(ProductList, {
      props: {
        isLoading: true,
        data: [],
      },
    });

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(false);
  });

  it("renders a no data message when isLoading is false and data is empty", () => {
    const wrapper = mount(ProductList, {
      props: {
        isLoading: false,
        data: [],
      },
    });

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(true);
  });

  it("renders product cards when data is provided", () => {
    const mockData = [
      {
        id: "1",
        name: "Product 1",
        images: ["image1.jpg"],
        commissionPrice: 100,
        customerPrice: 200,
        warehouseAddress: "Location 1",
        resellerPriceMinLabel: "Reseller Price 1",
        retailPriceLabel: "Retail Price 1",
        rating: 4,
        shareableLinkWithoutPrice: "https://example.com/product1",
      },
      {
        id: "2",
        name: "Product 2",
        images: ["image2.jpg"],
        commissionPrice: 150,
        customerPrice: 250,
        warehouseAddress: "Location 2",
        resellerPriceMinLabel: "Reseller Price 2",
        retailPriceLabel: "Retail Price 2",
        rating: 5,
        shareableLinkWithoutPrice: "https://example.com/product2",
      },
    ];

    const wrapper = mount(ProductList, {
      props: {
        isLoading: false,
        data: mockData as IProductList,
      },
    });

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(false);
    expect(wrapper.findAll('[data-testid="product-card"]').length).toBe(
      mockData.length,
    );
  });
});
