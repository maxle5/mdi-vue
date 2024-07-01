
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCropPortrait from "../../src/components/MdiCropPortrait.vue";

test("MdiCropPortrait snapshot", () => {
  const wrapper = mount(MdiCropPortrait, {});
  expect(wrapper.html()).toMatchSnapshot();
});
