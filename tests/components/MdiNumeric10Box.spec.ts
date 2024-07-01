
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10Box from "../../src/components/MdiNumeric10Box.vue";

test("MdiNumeric10Box snapshot", () => {
  const wrapper = mount(MdiNumeric10Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
