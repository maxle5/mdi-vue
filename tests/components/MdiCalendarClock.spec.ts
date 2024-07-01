
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarClock from "../../src/components/MdiCalendarClock.vue";

test("MdiCalendarClock snapshot", () => {
  const wrapper = mount(MdiCalendarClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
