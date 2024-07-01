
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderOutline from "../../src/components/MdiFolderOutline.vue";

test("MdiFolderOutline snapshot", () => {
  const wrapper = mount(MdiFolderOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
