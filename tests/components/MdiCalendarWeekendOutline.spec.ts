
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarWeekendOutline from "../../src/components/MdiCalendarWeekendOutline.vue";

test("MdiCalendarWeekendOutline snapshot", () => {
  const wrapper = mount(MdiCalendarWeekendOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
