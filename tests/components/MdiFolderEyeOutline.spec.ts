
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderEyeOutline from "../../src/components/MdiFolderEyeOutline.vue";

test("MdiFolderEyeOutline snapshot", () => {
  const wrapper = mount(MdiFolderEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
