
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderTextOutline from "../../src/components/MdiFolderTextOutline.vue";

test("MdiFolderTextOutline snapshot", () => {
  const wrapper = mount(MdiFolderTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
