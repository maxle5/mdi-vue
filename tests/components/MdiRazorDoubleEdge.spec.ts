
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRazorDoubleEdge from "../../src/components/MdiRazorDoubleEdge.vue";

test("MdiRazorDoubleEdge snapshot", () => {
  const wrapper = mount(MdiRazorDoubleEdge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
