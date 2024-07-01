
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapHorizontalHidden from "../../src/components/MdiSwapHorizontalHidden.vue";

test("MdiSwapHorizontalHidden snapshot", () => {
  const wrapper = mount(MdiSwapHorizontalHidden, {});
  expect(wrapper.html()).toMatchSnapshot();
});
