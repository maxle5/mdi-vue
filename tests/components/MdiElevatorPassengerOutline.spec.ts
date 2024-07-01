
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevatorPassengerOutline from "../../src/components/MdiElevatorPassengerOutline.vue";

test("MdiElevatorPassengerOutline snapshot", () => {
  const wrapper = mount(MdiElevatorPassengerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
