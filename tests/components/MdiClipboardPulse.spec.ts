
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPulse from "../../src/components/MdiClipboardPulse.vue";

test("MdiClipboardPulse snapshot", () => {
  const wrapper = mount(MdiClipboardPulse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
