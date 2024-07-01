
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermostatBoxAuto from "../../src/components/MdiThermostatBoxAuto.vue";

test("MdiThermostatBoxAuto snapshot", () => {
  const wrapper = mount(MdiThermostatBoxAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
