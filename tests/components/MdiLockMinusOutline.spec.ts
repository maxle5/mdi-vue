
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockMinusOutline from "../../src/components/MdiLockMinusOutline.vue";

test("MdiLockMinusOutline snapshot", () => {
  const wrapper = mount(MdiLockMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
