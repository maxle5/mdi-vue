
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermostatAuto from "../../src/components/MdiThermostatAuto.vue";

test("MdiThermostatAuto snapshot", () => {
  const wrapper = mount(MdiThermostatAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
