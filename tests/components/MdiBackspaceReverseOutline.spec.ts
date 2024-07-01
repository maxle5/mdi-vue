
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBackspaceReverseOutline from "../../src/components/MdiBackspaceReverseOutline.vue";

test("MdiBackspaceReverseOutline snapshot", () => {
  const wrapper = mount(MdiBackspaceReverseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
