
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentFlashOutline from "../../src/components/MdiCommentFlashOutline.vue";

test("MdiCommentFlashOutline snapshot", () => {
  const wrapper = mount(MdiCommentFlashOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
