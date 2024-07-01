
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowUpOutline from "../../src/components/MdiFolderArrowUpOutline.vue";

test("MdiFolderArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiFolderArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
