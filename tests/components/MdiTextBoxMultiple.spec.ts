
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxMultiple from "../../src/components/MdiTextBoxMultiple.vue";

test("MdiTextBoxMultiple snapshot", () => {
  const wrapper = mount(MdiTextBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
