
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineQuestionOutline from "../../src/components/MdiTimelineQuestionOutline.vue";

test("MdiTimelineQuestionOutline snapshot", () => {
  const wrapper = mount(MdiTimelineQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
