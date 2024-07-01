
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowSplitHorizontal from "../../src/components/MdiArrowSplitHorizontal.vue";

test("MdiArrowSplitHorizontal snapshot", () => {
  const wrapper = mount(MdiArrowSplitHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
