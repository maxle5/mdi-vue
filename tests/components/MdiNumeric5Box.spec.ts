
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5Box from "../../src/components/MdiNumeric5Box.vue";

test("MdiNumeric5Box snapshot", () => {
  const wrapper = mount(MdiNumeric5Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
