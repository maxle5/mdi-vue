
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTree from "../../src/components/MdiFileTree.vue";

test("MdiFileTree snapshot", () => {
  const wrapper = mount(MdiFileTree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
