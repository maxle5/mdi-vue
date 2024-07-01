
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermostat from "../../src/components/MdiThermostat.vue";

test("MdiThermostat snapshot", () => {
  const wrapper = mount(MdiThermostat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
