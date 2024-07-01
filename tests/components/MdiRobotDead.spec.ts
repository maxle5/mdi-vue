
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotDead from "../../src/components/MdiRobotDead.vue";

test("MdiRobotDead snapshot", () => {
  const wrapper = mount(MdiRobotDead, {});
  expect(wrapper.html()).toMatchSnapshot();
});
