
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2BoxMultipleOutline from "../../src/components/MdiNumeric2BoxMultipleOutline.vue";

test("MdiNumeric2BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric2BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
