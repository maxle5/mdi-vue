
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseArrowUpDown from "../../src/components/MdiBriefcaseArrowUpDown.vue";

test("MdiBriefcaseArrowUpDown snapshot", () => {
  const wrapper = mount(MdiBriefcaseArrowUpDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
