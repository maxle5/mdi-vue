
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraLockOutline from "../../src/components/MdiCameraLockOutline.vue";

test("MdiCameraLockOutline snapshot", () => {
  const wrapper = mount(MdiCameraLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
