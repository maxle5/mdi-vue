
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentProcessing from "../../src/components/MdiCommentProcessing.vue";

test("MdiCommentProcessing snapshot", () => {
  const wrapper = mount(MdiCommentProcessing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
