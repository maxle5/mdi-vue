
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextPlayOutline from "../../src/components/MdiClipboardTextPlayOutline.vue";

test("MdiClipboardTextPlayOutline snapshot", () => {
  const wrapper = mount(MdiClipboardTextPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
