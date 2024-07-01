
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7CircleOutline from "../../src/components/MdiNumeric7CircleOutline.vue";

test("MdiNumeric7CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric7CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
