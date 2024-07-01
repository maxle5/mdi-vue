
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarArrowRight from "../../src/components/MdiCalendarArrowRight.vue";

test("MdiCalendarArrowRight snapshot", () => {
  const wrapper = mount(MdiCalendarArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
