
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotAngry from "../../src/components/MdiRobotAngry.vue";

test("MdiRobotAngry snapshot", () => {
  const wrapper = mount(MdiRobotAngry, {});
  expect(wrapper.html()).toMatchSnapshot();
});
