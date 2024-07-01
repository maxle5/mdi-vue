
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderTableOutline from "../../src/components/MdiFolderTableOutline.vue";

test("MdiFolderTableOutline snapshot", () => {
  const wrapper = mount(MdiFolderTableOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
