
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotConfused from "../../src/components/MdiRobotConfused.vue";

test("MdiRobotConfused snapshot", () => {
  const wrapper = mount(MdiRobotConfused, {});
  expect(wrapper.html()).toMatchSnapshot();
});
