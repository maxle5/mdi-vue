
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1Box from "../../src/components/MdiNumeric1Box.vue";

test("MdiNumeric1Box snapshot", () => {
  const wrapper = mount(MdiNumeric1Box, {});
  expect(wrapper.html()).toMatchSnapshot();
});
