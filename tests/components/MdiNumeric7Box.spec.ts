
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7Box from "../../src/components/MdiNumeric7Box.vue";

test("MdiNumeric7Box snapshot", () => {
  const wrapper = mount(MdiNumeric7Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
