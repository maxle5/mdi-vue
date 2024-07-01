
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarLockOpen from "../../src/components/MdiCalendarLockOpen.vue";

test("MdiCalendarLockOpen snapshot", () => {
  const wrapper = mount(MdiCalendarLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
