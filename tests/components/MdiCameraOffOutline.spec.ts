
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraOffOutline from "../../src/components/MdiCameraOffOutline.vue";

test("MdiCameraOffOutline snapshot", () => {
  const wrapper = mount(MdiCameraOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
