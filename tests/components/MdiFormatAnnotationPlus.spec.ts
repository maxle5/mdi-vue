
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAnnotationPlus from "../../src/components/MdiFormatAnnotationPlus.vue";

test("MdiFormatAnnotationPlus snapshot", () => {
  const wrapper = mount(MdiFormatAnnotationPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
