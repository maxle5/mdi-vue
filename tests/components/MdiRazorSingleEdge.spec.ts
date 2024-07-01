
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRazorSingleEdge from "../../src/components/MdiRazorSingleEdge.vue";

test("MdiRazorSingleEdge snapshot", () => {
  const wrapper = mount(MdiRazorSingleEdge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
