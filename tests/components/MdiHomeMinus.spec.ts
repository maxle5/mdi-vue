
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeMinus from "../../src/components/MdiHomeMinus.vue";

test("MdiHomeMinus snapshot", () => {
  const wrapper = mount(MdiHomeMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
