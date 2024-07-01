
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderStarMultipleOutline from "../../src/components/MdiFolderStarMultipleOutline.vue";

test("MdiFolderStarMultipleOutline snapshot", () => {
  const wrapper = mount(MdiFolderStarMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
