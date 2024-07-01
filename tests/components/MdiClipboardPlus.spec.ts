
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPlus from "../../src/components/MdiClipboardPlus.vue";

test("MdiClipboardPlus snapshot", () => {
  const wrapper = mount(MdiClipboardPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
