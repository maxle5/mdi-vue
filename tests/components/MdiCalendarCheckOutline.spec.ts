
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarCheckOutline from "../../src/components/MdiCalendarCheckOutline.vue";

test("MdiCalendarCheckOutline snapshot", () => {
  const wrapper = mount(MdiCalendarCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
