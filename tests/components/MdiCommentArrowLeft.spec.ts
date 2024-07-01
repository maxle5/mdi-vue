
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentArrowLeft from "../../src/components/MdiCommentArrowLeft.vue";

test("MdiCommentArrowLeft snapshot", () => {
  const wrapper = mount(MdiCommentArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
