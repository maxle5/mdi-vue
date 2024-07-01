
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3BoxMultipleOutline from "../../src/components/MdiNumeric3BoxMultipleOutline.vue";

test("MdiNumeric3BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric3BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
