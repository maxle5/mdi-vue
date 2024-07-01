
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorVariantOff from "../../src/components/MdiSmokeDetectorVariantOff.vue";

test("MdiSmokeDetectorVariantOff snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
