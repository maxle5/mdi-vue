
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRowPlusAfter from "../../src/components/MdiTableRowPlusAfter.vue";

test("MdiTableRowPlusAfter snapshot", () => {
  const wrapper = mount(MdiTableRowPlusAfter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
