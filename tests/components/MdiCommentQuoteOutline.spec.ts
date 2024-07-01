
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentQuoteOutline from "../../src/components/MdiCommentQuoteOutline.vue";

test("MdiCommentQuoteOutline snapshot", () => {
  const wrapper = mount(MdiCommentQuoteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
