
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentCheckOutline from "../../src/components/MdiCommentCheckOutline.vue";

test("MdiCommentCheckOutline snapshot", () => {
  const wrapper = mount(MdiCommentCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
