
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentEyeOutline from "../../src/components/MdiCommentEyeOutline.vue";

test("MdiCommentEyeOutline snapshot", () => {
  const wrapper = mount(MdiCommentEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
