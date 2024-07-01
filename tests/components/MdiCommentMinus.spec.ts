
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentMinus from "../../src/components/MdiCommentMinus.vue";

test("MdiCommentMinus snapshot", () => {
  const wrapper = mount(MdiCommentMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
