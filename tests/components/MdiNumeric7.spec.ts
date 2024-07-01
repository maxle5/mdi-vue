
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric7 from "../../src/components/MdiNumeric7.vue";

test("MdiNumeric7 snapshot", () => {
  const wrapper = mount(MdiNumeric7, {});
  expect(wrapper.html()).toMatchSnapshot();
});
