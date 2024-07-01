
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenRemoveOutline from "../../src/components/MdiLockOpenRemoveOutline.vue";

test("MdiLockOpenRemoveOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
