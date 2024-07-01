
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSeatHeater from "../../src/components/MdiCarSeatHeater.vue";

test("MdiCarSeatHeater snapshot", () => {
  const wrapper = mount(MdiCarSeatHeater, {});
  expect(wrapper.html()).toMatchSnapshot();
});
