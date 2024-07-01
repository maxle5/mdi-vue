
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowDown from "../../src/components/MdiFolderArrowDown.vue";

test("MdiFolderArrowDown snapshot", () => {
  const wrapper = mount(MdiFolderArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
