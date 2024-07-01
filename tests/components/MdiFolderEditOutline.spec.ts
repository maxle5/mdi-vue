
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderEditOutline from "../../src/components/MdiFolderEditOutline.vue";

test("MdiFolderEditOutline snapshot", () => {
  const wrapper = mount(MdiFolderEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
