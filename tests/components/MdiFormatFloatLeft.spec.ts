
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFloatLeft from "../../src/components/MdiFormatFloatLeft.vue";

test("MdiFormatFloatLeft snapshot", () => {
  const wrapper = mount(MdiFormatFloatLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
