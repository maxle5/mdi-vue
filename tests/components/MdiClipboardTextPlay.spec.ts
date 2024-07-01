
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextPlay from "../../src/components/MdiClipboardTextPlay.vue";

test("MdiClipboardTextPlay snapshot", () => {
  const wrapper = mount(MdiClipboardTextPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
