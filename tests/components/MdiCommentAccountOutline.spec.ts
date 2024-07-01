
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentAccountOutline from "../../src/components/MdiCommentAccountOutline.vue";

test("MdiCommentAccountOutline snapshot", () => {
  const wrapper = mount(MdiCommentAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
