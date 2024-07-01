
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentArrowRight from "../../src/components/MdiCommentArrowRight.vue";

test("MdiCommentArrowRight snapshot", () => {
  const wrapper = mount(MdiCommentArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
