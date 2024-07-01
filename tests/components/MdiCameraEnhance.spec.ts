
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraEnhance from "../../src/components/MdiCameraEnhance.vue";

test("MdiCameraEnhance snapshot", () => {
  const wrapper = mount(MdiCameraEnhance, {});
  expect(wrapper.html()).toMatchSnapshot();
});
