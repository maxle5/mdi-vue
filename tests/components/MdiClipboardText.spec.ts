
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardText from "../../src/components/MdiClipboardText.vue";

test("MdiClipboardText snapshot", () => {
  const wrapper = mount(MdiClipboardText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
