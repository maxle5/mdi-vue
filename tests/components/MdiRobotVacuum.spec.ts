
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotVacuum from "../../src/components/MdiRobotVacuum.vue";

test("MdiRobotVacuum snapshot", () => {
  const wrapper = mount(MdiRobotVacuum, {});
  expect(wrapper.html()).toMatchSnapshot();
});
