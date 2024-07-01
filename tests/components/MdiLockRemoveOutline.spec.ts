
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockRemoveOutline from "../../src/components/MdiLockRemoveOutline.vue";

test("MdiLockRemoveOutline snapshot", () => {
  const wrapper = mount(MdiLockRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
