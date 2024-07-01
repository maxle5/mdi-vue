
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarArrowLeft from "../../src/components/MdiCalendarArrowLeft.vue";

test("MdiCalendarArrowLeft snapshot", () => {
  const wrapper = mount(MdiCalendarArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
