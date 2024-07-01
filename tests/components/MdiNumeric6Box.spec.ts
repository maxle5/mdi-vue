
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6Box from "../../src/components/MdiNumeric6Box.vue";

test("MdiNumeric6Box snapshot", () => {
  const wrapper = mount(MdiNumeric6Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
