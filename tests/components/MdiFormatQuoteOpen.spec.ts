
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatQuoteOpen from "../../src/components/MdiFormatQuoteOpen.vue";

test("MdiFormatQuoteOpen snapshot", () => {
  const wrapper = mount(MdiFormatQuoteOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
