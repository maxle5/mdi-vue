
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPlayMultiple from "../../src/components/MdiClipboardPlayMultiple.vue";

test("MdiClipboardPlayMultiple snapshot", () => {
  const wrapper = mount(MdiClipboardPlayMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
