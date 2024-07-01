
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraImage from "../../src/components/MdiCameraImage.vue";

test("MdiCameraImage snapshot", () => {
  const wrapper = mount(MdiCameraImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
