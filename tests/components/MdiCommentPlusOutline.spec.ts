
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentPlusOutline from "../../src/components/MdiCommentPlusOutline.vue";

test("MdiCommentPlusOutline snapshot", () => {
  const wrapper = mount(MdiCommentPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
