
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeFluidLevel from "../../src/components/MdiCarBrakeFluidLevel.vue";

test("MdiCarBrakeFluidLevel snapshot", () => {
  const wrapper = mount(MdiCarBrakeFluidLevel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
