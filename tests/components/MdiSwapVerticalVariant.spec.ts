
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapVerticalVariant from "../../src/components/MdiSwapVerticalVariant.vue";

test("MdiSwapVerticalVariant snapshot", () => {
  const wrapper = mount(MdiSwapVerticalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
