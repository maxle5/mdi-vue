
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatSleep from "../../src/components/MdiChatSleep.vue";

test("MdiChatSleep snapshot", () => {
  const wrapper = mount(MdiChatSleep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
