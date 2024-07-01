
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9Box from "../../src/components/MdiNumeric9Box.vue";

test("MdiNumeric9Box snapshot", () => {
  const wrapper = mount(MdiNumeric9Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
