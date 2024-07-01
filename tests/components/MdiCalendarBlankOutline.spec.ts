
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarBlankOutline from "../../src/components/MdiCalendarBlankOutline.vue";

test("MdiCalendarBlankOutline snapshot", () => {
  const wrapper = mount(MdiCalendarBlankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
