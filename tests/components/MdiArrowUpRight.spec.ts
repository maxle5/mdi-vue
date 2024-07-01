
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpRight from "../../src/components/MdiArrowUpRight.vue";

test("MdiArrowUpRight snapshot", () => {
  const wrapper = mount(MdiArrowUpRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
