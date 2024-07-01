
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentTextMultiple from "../../src/components/MdiCommentTextMultiple.vue";

test("MdiCommentTextMultiple snapshot", () => {
  const wrapper = mount(MdiCommentTextMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
