
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpLeft from "../../src/components/MdiArrowUpLeft.vue";

test("MdiArrowUpLeft snapshot", () => {
  const wrapper = mount(MdiArrowUpLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
