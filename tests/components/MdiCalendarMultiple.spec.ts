
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMultiple from "../../src/components/MdiCalendarMultiple.vue";

test("MdiCalendarMultiple snapshot", () => {
  const wrapper = mount(MdiCalendarMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
