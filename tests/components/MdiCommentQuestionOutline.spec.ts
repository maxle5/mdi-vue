
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentQuestionOutline from "../../src/components/MdiCommentQuestionOutline.vue";

test("MdiCommentQuestionOutline snapshot", () => {
  const wrapper = mount(MdiCommentQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
