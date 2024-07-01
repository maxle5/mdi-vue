
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevatorPassengerOffOutline from "../../src/components/MdiElevatorPassengerOffOutline.vue";

test("MdiElevatorPassengerOffOutline snapshot", () => {
  const wrapper = mount(MdiElevatorPassengerOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
