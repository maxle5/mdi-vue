
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardClock from "../../src/components/MdiClipboardClock.vue";

test("MdiClipboardClock snapshot", () => {
  const wrapper = mount(MdiClipboardClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
