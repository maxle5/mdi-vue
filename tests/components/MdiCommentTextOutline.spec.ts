
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentTextOutline from "../../src/components/MdiCommentTextOutline.vue";

test("MdiCommentTextOutline snapshot", () => {
  const wrapper = mount(MdiCommentTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
