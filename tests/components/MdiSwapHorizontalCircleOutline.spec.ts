
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapHorizontalCircleOutline from "../../src/components/MdiSwapHorizontalCircleOutline.vue";

test("MdiSwapHorizontalCircleOutline snapshot", () => {
  const wrapper = mount(MdiSwapHorizontalCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
