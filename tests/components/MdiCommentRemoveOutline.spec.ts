
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentRemoveOutline from "../../src/components/MdiCommentRemoveOutline.vue";

test("MdiCommentRemoveOutline snapshot", () => {
  const wrapper = mount(MdiCommentRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
