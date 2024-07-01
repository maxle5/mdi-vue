
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableColumnPlusAfter from "../../src/components/MdiTableColumnPlusAfter.vue";

test("MdiTableColumnPlusAfter snapshot", () => {
  const wrapper = mount(MdiTableColumnPlusAfter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
