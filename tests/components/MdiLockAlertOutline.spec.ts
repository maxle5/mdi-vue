
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockAlertOutline from "../../src/components/MdiLockAlertOutline.vue";

test("MdiLockAlertOutline snapshot", () => {
  const wrapper = mount(MdiLockAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
