
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentQuestion from "../../src/components/MdiCommentQuestion.vue";

test("MdiCommentQuestion snapshot", () => {
  const wrapper = mount(MdiCommentQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
