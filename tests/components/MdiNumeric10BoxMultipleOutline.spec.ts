
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric10BoxMultipleOutline from "../../src/components/MdiNumeric10BoxMultipleOutline.vue";

test("MdiNumeric10BoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric10BoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
