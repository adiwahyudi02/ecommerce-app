import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ProductCard from "../ProductCard.vue";
import { createRouter, createWebHistory } from "vue-router";

// Create a mock router
const routes = [
  {
    path: "/products/:id",
    component: { template: "<div>Mock Product Page</div>" }, // Mock component for the route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const props = {
  id: "1",
  name: "Test Product",
  image: "http://example.com/image.jpg",
  commision: "10%",
  location: "Test Location",
  resellerPrice: "10.000",
  retailPriceLabel: "12.000",
  rating: 4,
  showShareButton: true,
  shareableLink: "http://example.com/share",
};

describe("ProductCard", () => {
  it("renders the product card with the correct information", () => {
    const wrapper = mount(ProductCard, {
      props,
      global: {
        plugins: [router], // Add the router to the test
      },
    });

    // Test if the card is rendered
    expect(wrapper.find('[data-testid="product-card"]').exists()).toBe(true);

    // Test Image
    expect(wrapper.find('[data-testid="product-image"]').exists()).toBe(true);

    // Test shipping label
    expect(wrapper.find('[data-testid="shipping-label"]').text()).toBe(
      "Free Shipping",
    );

    // Test commission label
    expect(wrapper.find('[data-testid="commission-label"]').text()).toBe(
      "10% Commission",
    );

    // Test product location
    expect(wrapper.find('[data-testid="product-location"]').text()).toBe(
      "Test Location",
    );

    // Test product title
    expect(wrapper.find('[data-testid="product-title"]').text()).toBe(
      "Test Product",
    );

    // Test reseller price
    expect(wrapper.find('[data-testid="reseller-price"]').text()).toBe(
      "Rp. 10.000",
    );

    // Test retail price
    expect(wrapper.find('[data-testid="retail-price"]').text()).toBe(
      "Rp. 12.000",
    );
  });
});
