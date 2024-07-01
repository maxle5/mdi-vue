
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBackspaceOutline from "../../src/components/MdiBackspaceOutline.vue";

test("MdiBackspaceOutline snapshot", () => {
  const wrapper = mount(MdiBackspaceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
