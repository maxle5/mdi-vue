
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckMinus from "../../src/components/MdiTruckMinus.vue";

test("MdiTruckMinus snapshot", () => {
  const wrapper = mount(MdiTruckMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
