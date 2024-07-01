
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatQuestion from "../../src/components/MdiChatQuestion.vue";

test("MdiChatQuestion snapshot", () => {
  const wrapper = mount(MdiChatQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
