
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapVerticalBold from "../../src/components/MdiSwapVerticalBold.vue";

test("MdiSwapVerticalBold snapshot", () => {
  const wrapper = mount(MdiSwapVerticalBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
