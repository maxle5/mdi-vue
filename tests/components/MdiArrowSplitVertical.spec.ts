
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowSplitVertical from "../../src/components/MdiArrowSplitVertical.vue";

test("MdiArrowSplitVertical snapshot", () => {
  const wrapper = mount(MdiArrowSplitVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
