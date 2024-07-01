
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardOffOutline from "../../src/components/MdiClipboardOffOutline.vue";

test("MdiClipboardOffOutline snapshot", () => {
  const wrapper = mount(MdiClipboardOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
