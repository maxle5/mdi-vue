
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMinusOutline from "../../src/components/MdiCalendarMinusOutline.vue";

test("MdiCalendarMinusOutline snapshot", () => {
  const wrapper = mount(MdiCalendarMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
