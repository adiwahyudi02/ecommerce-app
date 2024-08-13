import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Title from "../Title.vue";

describe("Title", () => {
  it("renders the correct title prop", () => {
    const titleText = "Baju Muslim";

    const wrapper = mount(Title, {
      props: { title: titleText },
    });

    const titleElement = wrapper.find('[data-testid="title"]');

    expect(titleElement.text()).toBe(titleText);
  });
});
