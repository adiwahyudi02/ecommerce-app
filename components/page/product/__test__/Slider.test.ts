import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ProductSlider from "../Slider.vue";
import type { IProductList } from "~/types/products";

describe("ProductSlider", () => {
  const data = [
    {
      id: "1",
      name: "Product 1",
      images: ["image1.jpg"],
      commissionPrice: 100,
      customerPrice: 80,
      warehouseAddress: "Warehouse 1",
      resellerPriceMinLabel: "100",
      retailPriceLabel: "120",
      rating: 5,
    },
    {
      id: "2",
      name: "Product 2",
      images: ["image2.jpg"],
      commissionPrice: 200,
      customerPrice: 150,
      warehouseAddress: "Warehouse 2",
      resellerPriceMinLabel: "200",
      retailPriceLabel: "240",
      rating: 4,
    },
  ];

  it("shows loading component when isLoading is true", () => {
    const wrapper = mount(ProductSlider, {
      props: {
        isLoading: true,
        data: [],
      },
    });

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="product-slider"]').exists()).toBe(false);
  });

  it("shows no data message when isLoading is false and data is empty", () => {
    const wrapper = mount(ProductSlider, {
      props: {
        isLoading: false,
        data: [],
      },
    });

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="product-slider"]').exists()).toBe(false);
  });

  it("renders ProductCard components when data is provided", () => {
    const wrapper = mount(ProductSlider, {
      props: {
        isLoading: false,
        data: data as IProductList,
      },
    });

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="no-data"]').exists()).toBe(false);
    expect(wrapper.findAll('[data-testid="product-card"]')).toHaveLength(
      data.length,
    );
  });
});
