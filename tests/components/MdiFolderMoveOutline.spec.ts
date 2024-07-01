
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMoveOutline from "../../src/components/MdiFolderMoveOutline.vue";

test("MdiFolderMoveOutline snapshot", () => {
  const wrapper = mount(MdiFolderMoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
