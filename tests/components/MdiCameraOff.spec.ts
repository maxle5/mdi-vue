
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraOff from "../../src/components/MdiCameraOff.vue";

test("MdiCameraOff snapshot", () => {
  const wrapper = mount(MdiCameraOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
