
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPlusOutline from "../../src/components/MdiClipboardPlusOutline.vue";

test("MdiClipboardPlusOutline snapshot", () => {
  const wrapper = mount(MdiClipboardPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
