
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpDown from "../../src/components/MdiArrowUpDown.vue";

test("MdiArrowUpDown snapshot", () => {
  const wrapper = mount(MdiArrowUpDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
