
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatWrapInline from "../../src/components/MdiFormatWrapInline.vue";

test("MdiFormatWrapInline snapshot", () => {
  const wrapper = mount(MdiFormatWrapInline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
