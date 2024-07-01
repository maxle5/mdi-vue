
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderCheckOutline from "../../src/components/MdiFolderCheckOutline.vue";

test("MdiFolderCheckOutline snapshot", () => {
  const wrapper = mount(MdiFolderCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
