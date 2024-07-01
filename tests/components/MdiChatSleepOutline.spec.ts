
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatSleepOutline from "../../src/components/MdiChatSleepOutline.vue";

test("MdiChatSleepOutline snapshot", () => {
  const wrapper = mount(MdiChatSleepOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
