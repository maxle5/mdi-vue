
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPlay from "../../src/components/MdiClipboardPlay.vue";

test("MdiClipboardPlay snapshot", () => {
  const wrapper = mount(MdiClipboardPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
