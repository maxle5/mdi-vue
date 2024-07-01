
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMinus from "../../src/components/MdiFolderMinus.vue";

test("MdiFolderMinus snapshot", () => {
  const wrapper = mount(MdiFolderMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
