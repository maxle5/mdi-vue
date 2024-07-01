
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentQuote from "../../src/components/MdiCommentQuote.vue";

test("MdiCommentQuote snapshot", () => {
  const wrapper = mount(MdiCommentQuote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
