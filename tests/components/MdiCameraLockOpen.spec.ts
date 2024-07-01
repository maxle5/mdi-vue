
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraLockOpen from "../../src/components/MdiCameraLockOpen.vue";

test("MdiCameraLockOpen snapshot", () => {
  const wrapper = mount(MdiCameraLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
