
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenPlusOutline from "../../src/components/MdiLockOpenPlusOutline.vue";

test("MdiLockOpenPlusOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
