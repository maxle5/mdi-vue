
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentArrowLeftOutline from "../../src/components/MdiCommentArrowLeftOutline.vue";

test("MdiCommentArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiCommentArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
