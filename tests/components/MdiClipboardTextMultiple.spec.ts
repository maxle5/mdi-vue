
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextMultiple from "../../src/components/MdiClipboardTextMultiple.vue";

test("MdiClipboardTextMultiple snapshot", () => {
  const wrapper = mount(MdiClipboardTextMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
