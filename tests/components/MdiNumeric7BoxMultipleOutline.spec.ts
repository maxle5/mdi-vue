
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7BoxMultipleOutline from "../../src/components/MdiNumeric7BoxMultipleOutline.vue";

test("MdiNumeric7BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric7BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
