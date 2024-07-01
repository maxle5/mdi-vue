
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineQuestion from "../../src/components/MdiTimelineQuestion.vue";

test("MdiTimelineQuestion snapshot", () => {
  const wrapper = mount(MdiTimelineQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
