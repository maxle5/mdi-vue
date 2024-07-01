
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedVariantOn from "../../src/components/MdiLedVariantOn.vue";

test("MdiLedVariantOn snapshot", () => {
  const wrapper = mount(MdiLedVariantOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
