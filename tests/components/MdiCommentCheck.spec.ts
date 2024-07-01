
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentCheck from "../../src/components/MdiCommentCheck.vue";

test("MdiCommentCheck snapshot", () => {
  const wrapper = mount(MdiCommentCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
