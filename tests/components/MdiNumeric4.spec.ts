
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric4 from "../../src/components/MdiNumeric4.vue";

test("MdiNumeric4 snapshot", () => {
  const wrapper = mount(MdiNumeric4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
