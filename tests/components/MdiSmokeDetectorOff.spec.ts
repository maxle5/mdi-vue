
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorOff from "../../src/components/MdiSmokeDetectorOff.vue";

test("MdiSmokeDetectorOff snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
