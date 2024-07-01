
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSwapOutline from "../../src/components/MdiFolderSwapOutline.vue";

test("MdiFolderSwapOutline snapshot", () => {
  const wrapper = mount(MdiFolderSwapOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
