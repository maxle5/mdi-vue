
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8Box from "../../src/components/MdiNumeric8Box.vue";

test("MdiNumeric8Box snapshot", () => {
  const wrapper = mount(MdiNumeric8Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
