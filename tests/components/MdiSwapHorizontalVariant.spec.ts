
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapHorizontalVariant from "../../src/components/MdiSwapHorizontalVariant.vue";

test("MdiSwapHorizontalVariant snapshot", () => {
  const wrapper = mount(MdiSwapHorizontalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
