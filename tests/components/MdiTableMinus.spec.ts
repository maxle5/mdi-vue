
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableMinus from "../../src/components/MdiTableMinus.vue";

test("MdiTableMinus snapshot", () => {
  const wrapper = mount(MdiTableMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
