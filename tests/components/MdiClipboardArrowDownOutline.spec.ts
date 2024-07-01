
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowDownOutline from "../../src/components/MdiClipboardArrowDownOutline.vue";

test("MdiClipboardArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiClipboardArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
