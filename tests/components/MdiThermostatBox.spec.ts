
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermostatBox from "../../src/components/MdiThermostatBox.vue";

test("MdiThermostatBox snapshot", () => {
  const wrapper = mount(MdiThermostatBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
