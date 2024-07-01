
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockCheckOutline from "../../src/components/MdiLockCheckOutline.vue";

test("MdiLockCheckOutline snapshot", () => {
  const wrapper = mount(MdiLockCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
