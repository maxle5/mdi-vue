
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMinus from "../../src/components/MdiCalendarMinus.vue";

test("MdiCalendarMinus snapshot", () => {
  const wrapper = mount(MdiCalendarMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
