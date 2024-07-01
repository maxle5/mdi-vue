
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatQuestionOutline from "../../src/components/MdiChatQuestionOutline.vue";

test("MdiChatQuestionOutline snapshot", () => {
  const wrapper = mount(MdiChatQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
