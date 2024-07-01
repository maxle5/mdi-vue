
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraLockOpenOutline from "../../src/components/MdiCameraLockOpenOutline.vue";

test("MdiCameraLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiCameraLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
