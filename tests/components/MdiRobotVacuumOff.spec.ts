
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotVacuumOff from "../../src/components/MdiRobotVacuumOff.vue";

test("MdiRobotVacuumOff snapshot", () => {
  const wrapper = mount(MdiRobotVacuumOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
