
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarRangeOutline from "../../src/components/MdiCalendarRangeOutline.vue";

test("MdiCalendarRangeOutline snapshot", () => {
  const wrapper = mount(MdiCalendarRangeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
