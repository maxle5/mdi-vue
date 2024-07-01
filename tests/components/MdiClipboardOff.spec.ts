
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardOff from "../../src/components/MdiClipboardOff.vue";

test("MdiClipboardOff snapshot", () => {
  const wrapper = mount(MdiClipboardOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
