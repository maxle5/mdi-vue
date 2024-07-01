
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedStripVariantOff from "../../src/components/MdiLedStripVariantOff.vue";

test("MdiLedStripVariantOff snapshot", () => {
  const wrapper = mount(MdiLedStripVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
