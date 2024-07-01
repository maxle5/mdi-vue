
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4Box from "../../src/components/MdiNumeric4Box.vue";

test("MdiNumeric4Box snapshot", () => {
  const wrapper = mount(MdiNumeric4Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
