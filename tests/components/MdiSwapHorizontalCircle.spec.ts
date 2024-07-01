
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapHorizontalCircle from "../../src/components/MdiSwapHorizontalCircle.vue";

test("MdiSwapHorizontalCircle snapshot", () => {
  const wrapper = mount(MdiSwapHorizontalCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
