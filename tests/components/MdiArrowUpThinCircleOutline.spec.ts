
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpThinCircleOutline from "../../src/components/MdiArrowUpThinCircleOutline.vue";

test("MdiArrowUpThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
