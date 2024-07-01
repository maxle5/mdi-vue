
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextOffOutline from "../../src/components/MdiClipboardTextOffOutline.vue";

test("MdiClipboardTextOffOutline snapshot", () => {
  const wrapper = mount(MdiClipboardTextOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
