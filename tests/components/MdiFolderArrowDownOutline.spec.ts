
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowDownOutline from "../../src/components/MdiFolderArrowDownOutline.vue";

test("MdiFolderArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiFolderArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
