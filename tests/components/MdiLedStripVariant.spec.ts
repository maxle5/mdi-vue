
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedStripVariant from "../../src/components/MdiLedStripVariant.vue";

test("MdiLedStripVariant snapshot", () => {
  const wrapper = mount(MdiLedStripVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
