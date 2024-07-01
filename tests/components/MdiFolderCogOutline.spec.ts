
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderCogOutline from "../../src/components/MdiFolderCogOutline.vue";

test("MdiFolderCogOutline snapshot", () => {
  const wrapper = mount(MdiFolderCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
