
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMultipleOutline from "../../src/components/MdiFolderMultipleOutline.vue";

test("MdiFolderMultipleOutline snapshot", () => {
  const wrapper = mount(MdiFolderMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
