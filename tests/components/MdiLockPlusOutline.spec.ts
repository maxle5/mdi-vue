
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPlusOutline from "../../src/components/MdiLockPlusOutline.vue";

test("MdiLockPlusOutline snapshot", () => {
  const wrapper = mount(MdiLockPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
