
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardSearch from "../../src/components/MdiClipboardSearch.vue";

test("MdiClipboardSearch snapshot", () => {
  const wrapper = mount(MdiClipboardSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
