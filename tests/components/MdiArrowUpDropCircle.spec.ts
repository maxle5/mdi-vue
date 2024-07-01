
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpDropCircle from "../../src/components/MdiArrowUpDropCircle.vue";

test("MdiArrowUpDropCircle snapshot", () => {
  const wrapper = mount(MdiArrowUpDropCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
