
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarExpandHorizontal from "../../src/components/MdiCalendarExpandHorizontal.vue";

test("MdiCalendarExpandHorizontal snapshot", () => {
  const wrapper = mount(MdiCalendarExpandHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
