
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0BoxMultipleOutline from "../../src/components/MdiNumeric0BoxMultipleOutline.vue";

test("MdiNumeric0BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric0BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
