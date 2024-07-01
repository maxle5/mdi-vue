
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowUpOutline from "../../src/components/MdiClipboardArrowUpOutline.vue";

test("MdiClipboardArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiClipboardArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
