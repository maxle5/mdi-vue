
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapVerticalCircleOutline from "../../src/components/MdiSwapVerticalCircleOutline.vue";

test("MdiSwapVerticalCircleOutline snapshot", () => {
  const wrapper = mount(MdiSwapVerticalCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
