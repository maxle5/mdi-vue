
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFrequentlyAskedQuestions from "../../src/components/MdiFrequentlyAskedQuestions.vue";

test("MdiFrequentlyAskedQuestions snapshot", () => {
  const wrapper = mount(MdiFrequentlyAskedQuestions, {});
  expect(wrapper.html()).toMatchSnapshot();
});
