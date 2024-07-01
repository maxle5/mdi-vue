
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetector from "../../src/components/MdiSmokeDetector.vue";

test("MdiSmokeDetector snapshot", () => {
  const wrapper = mount(MdiSmokeDetector, {});
  expect(wrapper.html()).toMatchSnapshot();
});
