
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderRemove from "../../src/components/MdiFolderRemove.vue";

test("MdiFolderRemove snapshot", () => {
  const wrapper = mount(MdiFolderRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
