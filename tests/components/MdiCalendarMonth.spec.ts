
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMonth from "../../src/components/MdiCalendarMonth.vue";

test("MdiCalendarMonth snapshot", () => {
  const wrapper = mount(MdiCalendarMonth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
