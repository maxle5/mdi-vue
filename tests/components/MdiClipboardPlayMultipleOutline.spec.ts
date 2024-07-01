
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPlayMultipleOutline from "../../src/components/MdiClipboardPlayMultipleOutline.vue";

test("MdiClipboardPlayMultipleOutline snapshot", () => {
  const wrapper = mount(MdiClipboardPlayMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
