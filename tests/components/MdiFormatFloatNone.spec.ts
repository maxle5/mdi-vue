
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFloatNone from "../../src/components/MdiFormatFloatNone.vue";

test("MdiFormatFloatNone snapshot", () => {
  const wrapper = mount(MdiFormatFloatNone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
