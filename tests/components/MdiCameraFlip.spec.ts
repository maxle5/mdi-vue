
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraFlip from "../../src/components/MdiCameraFlip.vue";

test("MdiCameraFlip snapshot", () => {
  const wrapper = mount(MdiCameraFlip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
