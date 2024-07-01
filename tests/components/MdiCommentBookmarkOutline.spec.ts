
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentBookmarkOutline from "../../src/components/MdiCommentBookmarkOutline.vue";

test("MdiCommentBookmarkOutline snapshot", () => {
  const wrapper = mount(MdiCommentBookmarkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
