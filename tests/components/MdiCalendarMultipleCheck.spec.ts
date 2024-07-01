
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMultipleCheck from "../../src/components/MdiCalendarMultipleCheck.vue";

test("MdiCalendarMultipleCheck snapshot", () => {
  const wrapper = mount(MdiCalendarMultipleCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
