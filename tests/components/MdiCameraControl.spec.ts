
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraControl from "../../src/components/MdiCameraControl.vue";

test("MdiCameraControl snapshot", () => {
  const wrapper = mount(MdiCameraControl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
