
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentMultiple from "../../src/components/MdiCommentMultiple.vue";

test("MdiCommentMultiple snapshot", () => {
  const wrapper = mount(MdiCommentMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
