
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextSearchOutline from "../../src/components/MdiClipboardTextSearchOutline.vue";

test("MdiClipboardTextSearchOutline snapshot", () => {
  const wrapper = mount(MdiClipboardTextSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
