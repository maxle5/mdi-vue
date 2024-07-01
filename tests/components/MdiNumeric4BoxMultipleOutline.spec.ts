
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4BoxMultipleOutline from "../../src/components/MdiNumeric4BoxMultipleOutline.vue";

test("MdiNumeric4BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric4BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
