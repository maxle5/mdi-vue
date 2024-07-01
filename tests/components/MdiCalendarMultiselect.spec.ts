
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMultiselect from "../../src/components/MdiCalendarMultiselect.vue";

test("MdiCalendarMultiselect snapshot", () => {
  const wrapper = mount(MdiCalendarMultiselect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
