
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraFlipOutline from "../../src/components/MdiCameraFlipOutline.vue";

test("MdiCameraFlipOutline snapshot", () => {
  const wrapper = mount(MdiCameraFlipOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
