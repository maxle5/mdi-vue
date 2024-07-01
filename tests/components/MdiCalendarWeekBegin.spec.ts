
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarWeekBegin from "../../src/components/MdiCalendarWeekBegin.vue";

test("MdiCalendarWeekBegin snapshot", () => {
  const wrapper = mount(MdiCalendarWeekBegin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
