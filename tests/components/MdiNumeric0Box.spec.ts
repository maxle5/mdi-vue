
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0Box from "../../src/components/MdiNumeric0Box.vue";

test("MdiNumeric0Box snapshot", () => {
  const wrapper = mount(MdiNumeric0Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
