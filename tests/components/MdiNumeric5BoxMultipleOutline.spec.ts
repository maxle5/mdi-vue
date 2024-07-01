
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric5BoxMultipleOutline from "../../src/components/MdiNumeric5BoxMultipleOutline.vue";

test("MdiNumeric5BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric5BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
