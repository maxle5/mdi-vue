
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardCheckMultiple from "../../src/components/MdiClipboardCheckMultiple.vue";

test("MdiClipboardCheckMultiple snapshot", () => {
  const wrapper = mount(MdiClipboardCheckMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
