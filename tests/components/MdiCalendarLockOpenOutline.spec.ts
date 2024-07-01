
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarLockOpenOutline from "../../src/components/MdiCalendarLockOpenOutline.vue";

test("MdiCalendarLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiCalendarLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
