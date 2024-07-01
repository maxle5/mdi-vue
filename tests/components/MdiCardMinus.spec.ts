
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardMinus from "../../src/components/MdiCardMinus.vue";

test("MdiCardMinus snapshot", () => {
  const wrapper = mount(MdiCardMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
