
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentArrowRightOutline from "../../src/components/MdiCommentArrowRightOutline.vue";

test("MdiCommentArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiCommentArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
