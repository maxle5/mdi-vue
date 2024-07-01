
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotVacuumVariantOff from "../../src/components/MdiRobotVacuumVariantOff.vue";

test("MdiRobotVacuumVariantOff snapshot", () => {
  const wrapper = mount(MdiRobotVacuumVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
