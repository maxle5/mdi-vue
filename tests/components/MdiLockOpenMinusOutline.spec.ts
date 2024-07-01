
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenMinusOutline from "../../src/components/MdiLockOpenMinusOutline.vue";

test("MdiLockOpenMinusOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
