
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMinusOutline from "../../src/components/MdiFolderMinusOutline.vue";

test("MdiFolderMinusOutline snapshot", () => {
  const wrapper = mount(MdiFolderMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
