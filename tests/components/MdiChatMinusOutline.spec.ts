
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatMinusOutline from "../../src/components/MdiChatMinusOutline.vue";

test("MdiChatMinusOutline snapshot", () => {
  const wrapper = mount(MdiChatMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
