
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpDropCircleOutline from "../../src/components/MdiArrowUpDropCircleOutline.vue";

test("MdiArrowUpDropCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpDropCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
