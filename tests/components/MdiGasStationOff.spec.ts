
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasStationOff from "../../src/components/MdiGasStationOff.vue";

test("MdiGasStationOff snapshot", () => {
  const wrapper = mount(MdiGasStationOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
