
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentText from "../../src/components/MdiCommentText.vue";

test("MdiCommentText snapshot", () => {
  const wrapper = mount(MdiCommentText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
