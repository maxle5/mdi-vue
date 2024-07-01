
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderOpen from "../../src/components/MdiFolderOpen.vue";

test("MdiFolderOpen snapshot", () => {
  const wrapper = mount(MdiFolderOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
