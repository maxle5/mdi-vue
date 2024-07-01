
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2Box from "../../src/components/MdiNumeric2Box.vue";

test("MdiNumeric2Box snapshot", () => {
  const wrapper = mount(MdiNumeric2Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
