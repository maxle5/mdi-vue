
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardClockOutline from "../../src/components/MdiClipboardClockOutline.vue";

test("MdiClipboardClockOutline snapshot", () => {
  const wrapper = mount(MdiClipboardClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
