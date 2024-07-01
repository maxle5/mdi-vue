
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMonthOutline from "../../src/components/MdiCalendarMonthOutline.vue";

test("MdiCalendarMonthOutline snapshot", () => {
  const wrapper = mount(MdiCalendarMonthOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
