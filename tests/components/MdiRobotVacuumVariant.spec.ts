
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotVacuumVariant from "../../src/components/MdiRobotVacuumVariant.vue";

test("MdiRobotVacuumVariant snapshot", () => {
  const wrapper = mount(MdiRobotVacuumVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
