
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarExpandHorizontalOutline from "../../src/components/MdiCalendarExpandHorizontalOutline.vue";

test("MdiCalendarExpandHorizontalOutline snapshot", () => {
  const wrapper = mount(MdiCalendarExpandHorizontalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
