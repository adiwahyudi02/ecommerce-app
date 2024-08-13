import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Price from "../Prices.vue";

describe("Price", () => {
  it("renders customer price correctly", () => {
    const wrapper = mount(Price, {
      props: {
        customerPrice: 100000,
        resellerPriceMin: 80000,
        retailPrice: 120000,
        commission: 20000,
      },
    });

    expect(wrapper.find('[data-testid="customer-price"]').text()).toBe(
      rupiahPrefix(100000),
    );
  });

  it("renders reseller price correctly", () => {
    const wrapper = mount(Price, {
      props: {
        customerPrice: 100000,
        resellerPriceMin: 80000,
        retailPrice: 120000,
        commission: 20000,
      },
    });

    expect(wrapper.find('[data-testid="reseller-price"]').text()).toBe(
      rupiahPrefix(80000),
    );
  });

  it("renders retail price correctly", () => {
    const wrapper = mount(Price, {
      props: {
        customerPrice: 100000,
        resellerPriceMin: 80000,
        retailPrice: 120000,
        commission: 20000,
      },
    });

    expect(wrapper.find('[data-testid="retail-price"]').text()).toBe(
      rupiahPrefix(120000),
    );
  });

  it("renders commission correctly", () => {
    const wrapper = mount(Price, {
      props: {
        customerPrice: 100000,
        resellerPriceMin: 80000,
        retailPrice: 120000,
        commission: 20000,
      },
    });

    expect(wrapper.find('[data-testid="commission"]').text()).toBe(
      rupiahPrefix(20000),
    );
  });
});
