
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowDown from "../../src/components/MdiClipboardArrowDown.vue";

test("MdiClipboardArrowDown snapshot", () => {
  const wrapper = mount(MdiClipboardArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
