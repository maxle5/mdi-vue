
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAnnotationMinus from "../../src/components/MdiFormatAnnotationMinus.vue";

test("MdiFormatAnnotationMinus snapshot", () => {
  const wrapper = mount(MdiFormatAnnotationMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
