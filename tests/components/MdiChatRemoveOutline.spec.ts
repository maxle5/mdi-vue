
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatRemoveOutline from "../../src/components/MdiChatRemoveOutline.vue";

test("MdiChatRemoveOutline snapshot", () => {
  const wrapper = mount(MdiChatRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
