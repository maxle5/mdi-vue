
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeaf from "../../src/components/MdiLeaf.vue";

test("MdiLeaf snapshot", () => {
  const wrapper = mount(MdiLeaf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
