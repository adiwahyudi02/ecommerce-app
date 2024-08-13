import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ShippingWarehouse from "../ShippingWarehouse.vue";

describe("ShippingWarehouse", () => {
  it("renders the correct title and address", () => {
    const title = "Main Warehouse";
    const address = "1234 Shipping Lane, Delivery City";

    const wrapper = mount(ShippingWarehouse, {
      props: { title, address },
    });

    const titleElement = wrapper.find('[data-testid="warehouse-title"]');
    const addressElement = wrapper.find('[data-testid="warehouse-address"]');

    expect(titleElement.text()).toBe(title);
    expect(addressElement.text()).toBe(address);
  });
});
