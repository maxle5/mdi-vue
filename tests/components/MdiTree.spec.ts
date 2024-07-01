
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTree from "../../src/components/MdiTree.vue";

test("MdiTree snapshot", () => {
  const wrapper = mount(MdiTree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
