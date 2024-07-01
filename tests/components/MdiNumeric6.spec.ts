
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric6 from "../../src/components/MdiNumeric6.vue";

test("MdiNumeric6 snapshot", () => {
  const wrapper = mount(MdiNumeric6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
