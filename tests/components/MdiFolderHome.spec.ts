
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderHome from "../../src/components/MdiFolderHome.vue";

test("MdiFolderHome snapshot", () => {
  const wrapper = mount(MdiFolderHome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
