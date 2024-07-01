
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatQuoteCloseOutline from "../../src/components/MdiFormatQuoteCloseOutline.vue";

test("MdiFormatQuoteCloseOutline snapshot", () => {
  const wrapper = mount(MdiFormatQuoteCloseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
