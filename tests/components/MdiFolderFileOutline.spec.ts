
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderFileOutline from "../../src/components/MdiFolderFileOutline.vue";

test("MdiFolderFileOutline snapshot", () => {
  const wrapper = mount(MdiFolderFileOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
