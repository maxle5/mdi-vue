
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardCheckOutline from "../../src/components/MdiClipboardCheckOutline.vue";

test("MdiClipboardCheckOutline snapshot", () => {
  const wrapper = mount(MdiClipboardCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
