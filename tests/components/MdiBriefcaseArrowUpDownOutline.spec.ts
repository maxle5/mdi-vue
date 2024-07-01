
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseArrowUpDownOutline from "../../src/components/MdiBriefcaseArrowUpDownOutline.vue";

test("MdiBriefcaseArrowUpDownOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseArrowUpDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
