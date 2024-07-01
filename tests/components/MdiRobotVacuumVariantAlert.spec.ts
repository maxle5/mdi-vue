
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotVacuumVariantAlert from "../../src/components/MdiRobotVacuumVariantAlert.vue";

test("MdiRobotVacuumVariantAlert snapshot", () => {
  const wrapper = mount(MdiRobotVacuumVariantAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
