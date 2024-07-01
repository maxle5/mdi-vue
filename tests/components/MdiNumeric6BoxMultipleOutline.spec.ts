
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6BoxMultipleOutline from "../../src/components/MdiNumeric6BoxMultipleOutline.vue";

test("MdiNumeric6BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric6BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
