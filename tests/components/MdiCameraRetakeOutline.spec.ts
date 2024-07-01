
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraRetakeOutline from "../../src/components/MdiCameraRetakeOutline.vue";

test("MdiCameraRetakeOutline snapshot", () => {
  const wrapper = mount(MdiCameraRetakeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
