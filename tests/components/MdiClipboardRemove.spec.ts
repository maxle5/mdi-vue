
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardRemove from "../../src/components/MdiClipboardRemove.vue";

test("MdiClipboardRemove snapshot", () => {
  const wrapper = mount(MdiClipboardRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
