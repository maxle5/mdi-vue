
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatQuoteClose from "../../src/components/MdiFormatQuoteClose.vue";

test("MdiFormatQuoteClose snapshot", () => {
  const wrapper = mount(MdiFormatQuoteClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
