
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWashingMachineAlert from "../../src/components/MdiWashingMachineAlert.vue";

test("MdiWashingMachineAlert snapshot", () => {
  const wrapper = mount(MdiWashingMachineAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
