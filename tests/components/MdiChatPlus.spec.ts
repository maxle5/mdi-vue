
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatPlus from "../../src/components/MdiChatPlus.vue";

test("MdiChatPlus snapshot", () => {
  const wrapper = mount(MdiChatPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
