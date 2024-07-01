
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerLockOpenOutline from "../../src/components/MdiTimerLockOpenOutline.vue";

test("MdiTimerLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiTimerLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
