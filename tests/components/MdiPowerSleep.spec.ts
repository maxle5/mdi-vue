
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSleep from "../../src/components/MdiPowerSleep.vue";

test("MdiPowerSleep snapshot", () => {
  const wrapper = mount(MdiPowerSleep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
