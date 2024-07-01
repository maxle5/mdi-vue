
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraPlus from "../../src/components/MdiCameraPlus.vue";

test("MdiCameraPlus snapshot", () => {
  const wrapper = mount(MdiCameraPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
