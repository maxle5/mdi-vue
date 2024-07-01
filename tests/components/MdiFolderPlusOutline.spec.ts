
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderPlusOutline from "../../src/components/MdiFolderPlusOutline.vue";

test("MdiFolderPlusOutline snapshot", () => {
  const wrapper = mount(MdiFolderPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
