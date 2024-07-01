
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentEditOutline from "../../src/components/MdiCommentEditOutline.vue";

test("MdiCommentEditOutline snapshot", () => {
  const wrapper = mount(MdiCommentEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
