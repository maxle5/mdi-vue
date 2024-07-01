
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderLockOutline from "../../src/components/MdiFolderLockOutline.vue";

test("MdiFolderLockOutline snapshot", () => {
  const wrapper = mount(MdiFolderLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
