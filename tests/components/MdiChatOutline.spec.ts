
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatOutline from "../../src/components/MdiChatOutline.vue";

test("MdiChatOutline snapshot", () => {
  const wrapper = mount(MdiChatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
