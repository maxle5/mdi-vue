
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextMultipleOutline from "../../src/components/MdiClipboardTextMultipleOutline.vue";

test("MdiClipboardTextMultipleOutline snapshot", () => {
  const wrapper = mount(MdiClipboardTextMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
