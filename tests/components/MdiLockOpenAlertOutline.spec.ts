
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenAlertOutline from "../../src/components/MdiLockOpenAlertOutline.vue";

test("MdiLockOpenAlertOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
