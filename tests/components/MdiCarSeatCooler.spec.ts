
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSeatCooler from "../../src/components/MdiCarSeatCooler.vue";

test("MdiCarSeatCooler snapshot", () => {
  const wrapper = mount(MdiCarSeatCooler, {});
  expect(wrapper.html()).toMatchSnapshot();
});
