
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraEnhanceOutline from "../../src/components/MdiCameraEnhanceOutline.vue";

test("MdiCameraEnhanceOutline snapshot", () => {
  const wrapper = mount(MdiCameraEnhanceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
