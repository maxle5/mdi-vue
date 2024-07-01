
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoeFormal from "../../src/components/MdiShoeFormal.vue";

test("MdiShoeFormal snapshot", () => {
  const wrapper = mount(MdiShoeFormal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
