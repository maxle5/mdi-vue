
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLedVariantOutline from "../../src/components/MdiLedVariantOutline.vue";

test("MdiLedVariantOutline snapshot", () => {
  const wrapper = mount(MdiLedVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
