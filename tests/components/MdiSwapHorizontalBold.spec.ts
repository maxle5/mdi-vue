
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapHorizontalBold from "../../src/components/MdiSwapHorizontalBold.vue";

test("MdiSwapHorizontalBold snapshot", () => {
  const wrapper = mount(MdiSwapHorizontalBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
