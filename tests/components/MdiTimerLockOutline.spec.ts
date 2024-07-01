
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerLockOutline from "../../src/components/MdiTimerLockOutline.vue";

test("MdiTimerLockOutline snapshot", () => {
  const wrapper = mount(MdiTimerLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
