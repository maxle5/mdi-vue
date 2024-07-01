
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarWeek from "../../src/components/MdiCalendarWeek.vue";

test("MdiCalendarWeek snapshot", () => {
  const wrapper = mount(MdiCalendarWeek, {});
  expect(wrapper.html()).toMatchSnapshot();
});
