
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFamilyTree from "../../src/components/MdiFamilyTree.vue";

test("MdiFamilyTree snapshot", () => {
  const wrapper = mount(MdiFamilyTree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
