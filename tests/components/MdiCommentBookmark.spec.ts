
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentBookmark from "../../src/components/MdiCommentBookmark.vue";

test("MdiCommentBookmark snapshot", () => {
  const wrapper = mount(MdiCommentBookmark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
