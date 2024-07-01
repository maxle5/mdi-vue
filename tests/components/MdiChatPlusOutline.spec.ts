
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatPlusOutline from "../../src/components/MdiChatPlusOutline.vue";

test("MdiChatPlusOutline snapshot", () => {
  const wrapper = mount(MdiChatPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
