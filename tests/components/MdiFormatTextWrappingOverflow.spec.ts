
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextWrappingOverflow from "../../src/components/MdiFormatTextWrappingOverflow.vue";

test("MdiFormatTextWrappingOverflow snapshot", () => {
  const wrapper = mount(MdiFormatTextWrappingOverflow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
