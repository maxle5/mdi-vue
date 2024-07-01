
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPulseOutline from "../../src/components/MdiClipboardPulseOutline.vue";

test("MdiClipboardPulseOutline snapshot", () => {
  const wrapper = mount(MdiClipboardPulseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
