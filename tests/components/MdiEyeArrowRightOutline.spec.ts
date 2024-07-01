
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeArrowRightOutline from "../../src/components/MdiEyeArrowRightOutline.vue";

test("MdiEyeArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiEyeArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
