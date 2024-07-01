
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapVerticalCircle from "../../src/components/MdiSwapVerticalCircle.vue";

test("MdiSwapVerticalCircle snapshot", () => {
  const wrapper = mount(MdiSwapVerticalCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
