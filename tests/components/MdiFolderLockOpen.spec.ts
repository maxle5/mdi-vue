
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderLockOpen from "../../src/components/MdiFolderLockOpen.vue";

test("MdiFolderLockOpen snapshot", () => {
  const wrapper = mount(MdiFolderLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
