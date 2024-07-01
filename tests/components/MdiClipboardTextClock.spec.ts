
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextClock from "../../src/components/MdiClipboardTextClock.vue";

test("MdiClipboardTextClock snapshot", () => {
  const wrapper = mount(MdiClipboardTextClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
