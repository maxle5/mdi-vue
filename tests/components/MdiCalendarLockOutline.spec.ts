
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarLockOutline from "../../src/components/MdiCalendarLockOutline.vue";

test("MdiCalendarLockOutline snapshot", () => {
  const wrapper = mount(MdiCalendarLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
