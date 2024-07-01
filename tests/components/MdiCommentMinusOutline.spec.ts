
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentMinusOutline from "../../src/components/MdiCommentMinusOutline.vue";

test("MdiCommentMinusOutline snapshot", () => {
  const wrapper = mount(MdiCommentMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
