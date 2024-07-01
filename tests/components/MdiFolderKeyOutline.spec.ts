
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderKeyOutline from "../../src/components/MdiFolderKeyOutline.vue";

test("MdiFolderKeyOutline snapshot", () => {
  const wrapper = mount(MdiFolderKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
