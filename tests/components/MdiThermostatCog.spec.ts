
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermostatCog from "../../src/components/MdiThermostatCog.vue";

test("MdiThermostatCog snapshot", () => {
  const wrapper = mount(MdiThermostatCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
