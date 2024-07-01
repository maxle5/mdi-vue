
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarWeekend from "../../src/components/MdiCalendarWeekend.vue";

test("MdiCalendarWeekend snapshot", () => {
  const wrapper = mount(MdiCalendarWeekend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
