
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevatorUp from "../../src/components/MdiElevatorUp.vue";

test("MdiElevatorUp snapshot", () => {
  const wrapper = mount(MdiElevatorUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
