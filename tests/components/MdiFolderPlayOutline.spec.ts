
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderPlayOutline from "../../src/components/MdiFolderPlayOutline.vue";

test("MdiFolderPlayOutline snapshot", () => {
  const wrapper = mount(MdiFolderPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
