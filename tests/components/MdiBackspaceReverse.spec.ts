
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBackspaceReverse from "../../src/components/MdiBackspaceReverse.vue";

test("MdiBackspaceReverse snapshot", () => {
  const wrapper = mount(MdiBackspaceReverse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
