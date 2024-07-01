
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorOffOutline from "../../src/components/MdiSmokeDetectorOffOutline.vue";

test("MdiSmokeDetectorOffOutline snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
