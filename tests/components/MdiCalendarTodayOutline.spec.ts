
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarTodayOutline from "../../src/components/MdiCalendarTodayOutline.vue";

test("MdiCalendarTodayOutline snapshot", () => {
  const wrapper = mount(MdiCalendarTodayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
