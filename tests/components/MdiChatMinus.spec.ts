
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatMinus from "../../src/components/MdiChatMinus.vue";

test("MdiChatMinus snapshot", () => {
  const wrapper = mount(MdiChatMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
