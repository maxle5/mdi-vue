
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatQuoteOpenOutline from "../../src/components/MdiFormatQuoteOpenOutline.vue";

test("MdiFormatQuoteOpenOutline snapshot", () => {
  const wrapper = mount(MdiFormatQuoteOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
