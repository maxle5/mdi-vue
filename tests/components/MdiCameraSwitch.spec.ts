
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraSwitch from "../../src/components/MdiCameraSwitch.vue";

test("MdiCameraSwitch snapshot", () => {
  const wrapper = mount(MdiCameraSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
