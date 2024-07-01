
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderRemoveOutline from "../../src/components/MdiFolderRemoveOutline.vue";

test("MdiFolderRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFolderRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
