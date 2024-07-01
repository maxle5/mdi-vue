
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarWeekOutline from "../../src/components/MdiCalendarWeekOutline.vue";

test("MdiCalendarWeekOutline snapshot", () => {
  const wrapper = mount(MdiCalendarWeekOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
