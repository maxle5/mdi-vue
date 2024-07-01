
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotVacuumAlert from "../../src/components/MdiRobotVacuumAlert.vue";

test("MdiRobotVacuumAlert snapshot", () => {
  const wrapper = mount(MdiRobotVacuumAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
