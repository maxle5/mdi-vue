
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapVertical from "../../src/components/MdiSwapVertical.vue";

test("MdiSwapVertical snapshot", () => {
  const wrapper = mount(MdiSwapVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
