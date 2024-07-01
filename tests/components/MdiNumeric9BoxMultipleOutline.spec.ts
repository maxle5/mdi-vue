
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9BoxMultipleOutline from "../../src/components/MdiNumeric9BoxMultipleOutline.vue";

test("MdiNumeric9BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric9BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
