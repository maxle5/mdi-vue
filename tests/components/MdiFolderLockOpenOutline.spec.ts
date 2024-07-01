
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderLockOpenOutline from "../../src/components/MdiFolderLockOpenOutline.vue";

test("MdiFolderLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiFolderLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
