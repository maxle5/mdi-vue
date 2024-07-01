
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextVariantOutline from "../../src/components/MdiFormatTextVariantOutline.vue";

test("MdiFormatTextVariantOutline snapshot", () => {
  const wrapper = mount(MdiFormatTextVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
