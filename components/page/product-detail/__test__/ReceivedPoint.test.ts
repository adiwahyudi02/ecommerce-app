import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ReceivedPoint from "../ReceivedPoint.vue";

describe("ReceivedPoint.vue", () => {
  it("renders the correct point amount", () => {
    const pointValue = 150;
    const wrapper = mount(ReceivedPoint, {
      props: {
        point: pointValue,
      },
    });

    expect(wrapper.find('[data-testid="point-amount"]').text()).toMatch(
      pointValue.toString(),
    );
  });
});
