
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockMinus from "../../src/components/MdiClockMinus.vue";

test("MdiClockMinus snapshot", () => {
  const wrapper = mount(MdiClockMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
