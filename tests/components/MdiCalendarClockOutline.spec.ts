
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarClockOutline from "../../src/components/MdiCalendarClockOutline.vue";

test("MdiCalendarClockOutline snapshot", () => {
  const wrapper = mount(MdiCalendarClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
