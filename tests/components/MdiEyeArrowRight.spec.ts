
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeArrowRight from "../../src/components/MdiEyeArrowRight.vue";

test("MdiEyeArrowRight snapshot", () => {
  const wrapper = mount(MdiEyeArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
