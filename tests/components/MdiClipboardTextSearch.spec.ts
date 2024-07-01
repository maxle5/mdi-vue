
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardTextSearch from "../../src/components/MdiClipboardTextSearch.vue";

test("MdiClipboardTextSearch snapshot", () => {
  const wrapper = mount(MdiClipboardTextSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
