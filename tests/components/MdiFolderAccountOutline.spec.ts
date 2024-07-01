
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderAccountOutline from "../../src/components/MdiFolderAccountOutline.vue";

test("MdiFolderAccountOutline snapshot", () => {
  const wrapper = mount(MdiFolderAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
