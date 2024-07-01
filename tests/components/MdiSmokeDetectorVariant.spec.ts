
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorVariant from "../../src/components/MdiSmokeDetectorVariant.vue";

test("MdiSmokeDetectorVariant snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
