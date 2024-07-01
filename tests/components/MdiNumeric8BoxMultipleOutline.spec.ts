
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8BoxMultipleOutline from "../../src/components/MdiNumeric8BoxMultipleOutline.vue";

test("MdiNumeric8BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric8BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
