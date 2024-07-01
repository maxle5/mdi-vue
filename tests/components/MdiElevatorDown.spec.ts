
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevatorDown from "../../src/components/MdiElevatorDown.vue";

test("MdiElevatorDown snapshot", () => {
  const wrapper = mount(MdiElevatorDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
