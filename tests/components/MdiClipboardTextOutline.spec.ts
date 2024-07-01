
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextOutline from "../../src/components/MdiClipboardTextOutline.vue";

test("MdiClipboardTextOutline snapshot", () => {
  const wrapper = mount(MdiClipboardTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
