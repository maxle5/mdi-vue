
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentOutline from "../../src/components/MdiCommentOutline.vue";

test("MdiCommentOutline snapshot", () => {
  const wrapper = mount(MdiCommentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
