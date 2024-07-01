
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotMower from "../../src/components/MdiRobotMower.vue";

test("MdiRobotMower snapshot", () => {
  const wrapper = mount(MdiRobotMower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
