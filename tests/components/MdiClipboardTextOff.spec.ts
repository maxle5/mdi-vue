
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextOff from "../../src/components/MdiClipboardTextOff.vue";

test("MdiClipboardTextOff snapshot", () => {
  const wrapper = mount(MdiClipboardTextOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
