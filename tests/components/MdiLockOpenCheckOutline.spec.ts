
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenCheckOutline from "../../src/components/MdiLockOpenCheckOutline.vue";

test("MdiLockOpenCheckOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
