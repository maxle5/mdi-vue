
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatPaint from "../../src/components/MdiFormatPaint.vue";

test("MdiFormatPaint snapshot", () => {
  const wrapper = mount(MdiFormatPaint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
