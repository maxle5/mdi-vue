
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadVariantOutline from "../../src/components/MdiGamepadVariantOutline.vue";

test("MdiGamepadVariantOutline snapshot", () => {
  const wrapper = mount(MdiGamepadVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
