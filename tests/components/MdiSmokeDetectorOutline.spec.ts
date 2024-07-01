
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorOutline from "../../src/components/MdiSmokeDetectorOutline.vue";

test("MdiSmokeDetectorOutline snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
