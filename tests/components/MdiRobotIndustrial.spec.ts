
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotIndustrial from "../../src/components/MdiRobotIndustrial.vue";

test("MdiRobotIndustrial snapshot", () => {
  const wrapper = mount(MdiRobotIndustrial, {});
  expect(wrapper.html()).toMatchSnapshot();
});
