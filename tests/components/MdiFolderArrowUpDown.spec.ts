
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowUpDown from "../../src/components/MdiFolderArrowUpDown.vue";

test("MdiFolderArrowUpDown snapshot", () => {
  const wrapper = mount(MdiFolderArrowUpDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
