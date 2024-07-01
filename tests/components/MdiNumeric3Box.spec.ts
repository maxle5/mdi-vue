
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3Box from "../../src/components/MdiNumeric3Box.vue";

test("MdiNumeric3Box snapshot", () => {
  const wrapper = mount(MdiNumeric3Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
