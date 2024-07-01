
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentProcessingOutline from "../../src/components/MdiCommentProcessingOutline.vue";

test("MdiCommentProcessingOutline snapshot", () => {
  const wrapper = mount(MdiCommentProcessingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
