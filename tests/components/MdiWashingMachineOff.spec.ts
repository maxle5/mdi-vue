
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWashingMachineOff from "../../src/components/MdiWashingMachineOff.vue";

test("MdiWashingMachineOff snapshot", () => {
  const wrapper = mount(MdiWashingMachineOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
