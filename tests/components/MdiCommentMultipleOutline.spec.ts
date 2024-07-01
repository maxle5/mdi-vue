
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentMultipleOutline from "../../src/components/MdiCommentMultipleOutline.vue";

test("MdiCommentMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCommentMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
