import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ShareAndAdd from "../ShareAndAdd.vue";

describe("ShareAndAdd", () => {
  it("renders the correct share and add", () => {
    const wrapper = mount(ShareAndAdd);

    const shareButton = wrapper.find('[data-testid="share-button"]');
    const addButton = wrapper.find('[data-testid="add-button"]');

    expect(shareButton.exists()).toBe(true);
    expect(addButton.exists()).toBe(true);
  });

  it('emits "onShare" when the share button is clicked', async () => {
    const wrapper = mount(ShareAndAdd);

    const shareButton = wrapper.find('[data-testid="share-button"]');
    await shareButton.trigger("click");

    expect(wrapper.emitted("onShare")).toHaveLength(1);
  });

  it('emits "onAdd" when the add button is clicked', async () => {
    const wrapper = mount(ShareAndAdd);

    const addButton = wrapper.find('[data-testid="add-button"]');
    await addButton.trigger("click");

    expect(wrapper.emitted("onAdd")).toHaveLength(1);
  });
});
