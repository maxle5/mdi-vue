
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentOff from "../../src/components/MdiCommentOff.vue";

test("MdiCommentOff snapshot", () => {
  const wrapper = mount(MdiCommentOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
