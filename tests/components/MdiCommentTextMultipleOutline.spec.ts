
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentTextMultipleOutline from "../../src/components/MdiCommentTextMultipleOutline.vue";

test("MdiCommentTextMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCommentTextMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
