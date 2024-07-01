
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerPlugBatteryOutline from "../../src/components/MdiPowerPlugBatteryOutline.vue";

test("MdiPowerPlugBatteryOutline snapshot", () => {
  const wrapper = mount(MdiPowerPlugBatteryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
