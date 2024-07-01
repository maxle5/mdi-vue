
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderArrowUp from "../../src/components/MdiFolderArrowUp.vue";

test("MdiFolderArrowUp snapshot", () => {
  const wrapper = mount(MdiFolderArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
