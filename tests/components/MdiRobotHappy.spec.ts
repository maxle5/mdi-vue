
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotHappy from "../../src/components/MdiRobotHappy.vue";

test("MdiRobotHappy snapshot", () => {
  const wrapper = mount(MdiRobotHappy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
