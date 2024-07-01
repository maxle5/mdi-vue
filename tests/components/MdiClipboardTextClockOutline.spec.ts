
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextClockOutline from "../../src/components/MdiClipboardTextClockOutline.vue";

test("MdiClipboardTextClockOutline snapshot", () => {
  const wrapper = mount(MdiClipboardTextClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
