
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentSearchOutline from "../../src/components/MdiCommentSearchOutline.vue";

test("MdiCommentSearchOutline snapshot", () => {
  const wrapper = mount(MdiCommentSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
