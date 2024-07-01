
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevatorPassengerOff from "../../src/components/MdiElevatorPassengerOff.vue";

test("MdiElevatorPassengerOff snapshot", () => {
  const wrapper = mount(MdiElevatorPassengerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
