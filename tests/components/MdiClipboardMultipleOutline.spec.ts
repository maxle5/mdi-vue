
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardMultipleOutline from "../../src/components/MdiClipboardMultipleOutline.vue";

test("MdiClipboardMultipleOutline snapshot", () => {
  const wrapper = mount(MdiClipboardMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
