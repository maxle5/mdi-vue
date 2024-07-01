
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedVariantOff from "../../src/components/MdiLedVariantOff.vue";

test("MdiLedVariantOff snapshot", () => {
  const wrapper = mount(MdiLedVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
