
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentRemove from "../../src/components/MdiCommentRemove.vue";

test("MdiCommentRemove snapshot", () => {
  const wrapper = mount(MdiCommentRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
