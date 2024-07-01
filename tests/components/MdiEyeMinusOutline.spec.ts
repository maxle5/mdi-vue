
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeMinusOutline from "../../src/components/MdiEyeMinusOutline.vue";

test("MdiEyeMinusOutline snapshot", () => {
  const wrapper = mount(MdiEyeMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
