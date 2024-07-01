
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardFlow from "../../src/components/MdiClipboardFlow.vue";

test("MdiClipboardFlow snapshot", () => {
  const wrapper = mount(MdiClipboardFlow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
