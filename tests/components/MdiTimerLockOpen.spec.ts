
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerLockOpen from "../../src/components/MdiTimerLockOpen.vue";

test("MdiTimerLockOpen snapshot", () => {
  const wrapper = mount(MdiTimerLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
