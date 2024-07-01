
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardCheckMultipleOutline from "../../src/components/MdiClipboardCheckMultipleOutline.vue";

test("MdiClipboardCheckMultipleOutline snapshot", () => {
  const wrapper = mount(MdiClipboardCheckMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
