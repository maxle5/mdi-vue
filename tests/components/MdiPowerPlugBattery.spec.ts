
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerPlugBattery from "../../src/components/MdiPowerPlugBattery.vue";

test("MdiPowerPlugBattery snapshot", () => {
  const wrapper = mount(MdiPowerPlugBattery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
