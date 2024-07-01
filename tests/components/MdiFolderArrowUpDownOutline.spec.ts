
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowUpDownOutline from "../../src/components/MdiFolderArrowUpDownOutline.vue";

test("MdiFolderArrowUpDownOutline snapshot", () => {
  const wrapper = mount(MdiFolderArrowUpDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
