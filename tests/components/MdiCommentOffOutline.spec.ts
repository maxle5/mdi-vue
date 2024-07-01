
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentOffOutline from "../../src/components/MdiCommentOffOutline.vue";

test("MdiCommentOffOutline snapshot", () => {
  const wrapper = mount(MdiCommentOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
