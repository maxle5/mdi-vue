
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarBlankMultiple from "../../src/components/MdiCalendarBlankMultiple.vue";

test("MdiCalendarBlankMultiple snapshot", () => {
  const wrapper = mount(MdiCalendarBlankMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
