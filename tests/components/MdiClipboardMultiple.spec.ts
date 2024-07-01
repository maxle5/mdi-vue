
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardMultiple from "../../src/components/MdiClipboardMultiple.vue";

test("MdiClipboardMultiple snapshot", () => {
  const wrapper = mount(MdiClipboardMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
