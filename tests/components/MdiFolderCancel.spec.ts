
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderCancel from "../../src/components/MdiFolderCancel.vue";

test("MdiFolderCancel snapshot", () => {
  const wrapper = mount(MdiFolderCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
