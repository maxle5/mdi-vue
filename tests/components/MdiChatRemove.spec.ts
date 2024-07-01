
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatRemove from "../../src/components/MdiChatRemove.vue";

test("MdiChatRemove snapshot", () => {
  const wrapper = mount(MdiChatRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
