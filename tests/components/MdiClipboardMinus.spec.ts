
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardMinus from "../../src/components/MdiClipboardMinus.vue";

test("MdiClipboardMinus snapshot", () => {
  const wrapper = mount(MdiClipboardMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
