
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatItalic from "../../src/components/MdiFormatItalic.vue";

test("MdiFormatItalic snapshot", () => {
  const wrapper = mount(MdiFormatItalic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
